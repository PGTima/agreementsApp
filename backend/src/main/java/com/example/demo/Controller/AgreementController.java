package com.example.demo.Controller;

import com.example.demo.Model.Agreement;
import com.example.demo.Service.AgreementsService;
import org.decimal4j.util.DoubleRounder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@RestController
public class AgreementController {

    @Autowired
    public AgreementsService agreementsService;

    /**
     * API добавления договора
     * @param agreement
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/addAgreement",method = RequestMethod.POST)
    public Object addAgreement(@RequestBody Agreement agreement){
        if (agreement.getAdressId()==null || agreement.getClientId() == null
                || agreement.getAgreementNumber().isEmpty()
                || agreement.getSrachSumm().isEmpty()||agreement.getComment().isEmpty()
                ||agreement.getDateComplet()== null|| agreement.getDateRasheta() == null
                || agreement.getPrize().isEmpty()||agreement.getSeriesNomer().isEmpty()){
            return "NO_PARAMS";
        }else{
            try{
                return agreementsService.addAgreement(agreement);
            }catch(Exception e){
                return "ERROR";
            }
        }
    }

    /**
     * API Вывода списка всех договоров
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/allAgreement",method = RequestMethod.GET)
    public List<Agreement> allAgreement(){
        return agreementsService.getAll();
    }

    /**
     * API редактирования договора
     * @param agreement
     * @return
     */
    @RequestMapping(value = "/editAgreement",method = RequestMethod.POST)
    public Object editAgreement(@RequestBody Agreement agreement){
        if (agreement.getAdressId()==null || agreement.getClientId() == null
                || agreement.getAgreementNumber().isEmpty()
                || agreement.getSrachSumm().isEmpty()||agreement.getComment().isEmpty()
                ||agreement.getDateComplet()==null|| agreement.getDateRasheta() == null
                || agreement.getPrize().isEmpty()||agreement.getSeriesNomer().isEmpty()){
            return "NO_PARAMS";
        }else{
            try{
                return agreementsService.editAgreement(agreement);
            }catch(Exception e){
                return "ERROR";
            }
        }
    }

    /**
     * API Поиска договора по клиенту ид
     * @param client_id
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/findAgreement",method = RequestMethod.GET)
    public Object findAgreement(@RequestParam Integer client_id){
         if (client_id == null){
             return "NO_PARAMS";
         }else{
             try{
                 List<Agreement> agr = agreementsService.findByClientId(client_id);
                 if (agr.size() > 0){
                     return agr;
                 }else{
                     return "NOT_DATA_FOUND";
                 }
             }catch(Exception e){
                 return "ERROR";
             }
         }
    }

    /**
     * API  поиска договора по ид
     * @param id
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/findByIdAgreement",method = RequestMethod.GET)
    public Object findAgreementById(@RequestParam Integer id){
        if (id == null){
            return "NO_PARAMS";
        }else{
            try{
                Agreement agr = agreementsService.findById(id);
                if (agr != null){
                    return agr;
                }else{
                    return "NOT_DATA_FOUND";
                }
            }catch(Exception e){
                return "ERROR";
            }
        }
    }

    /**
     * API  поиска договора по номеру договора
     * @param agreementNumber
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/findByAgreementNumber",method = RequestMethod.GET)
    public Boolean findAgreementById(@RequestParam String agreementNumber){
        if (agreementNumber == null){
            return false;
        }else{
            try{
                return agreementsService.findByAgreementNumber(agreementNumber).size() > 0;
            }catch(Exception e){
                return false;
            }
        }
    }

    /**
     * API расчета премии по договору
     * @param typeDrawell
     * @param yearDrawell
     * @param strachSumm
     * @param squareDrawell
     * @param dateFrom
     * @param dateTo
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/GetPrizeForAgreement",method = RequestMethod.GET)
    public String GetPrizeForAgreement(@RequestParam String typeDrawell,@RequestParam String yearDrawell,
                                       @RequestParam String strachSumm, @RequestParam String squareDrawell,
                                       @RequestParam String dateFrom,@RequestParam String dateTo){
        if (squareDrawell.isEmpty() || typeDrawell.isEmpty() ||yearDrawell.isEmpty()||
                strachSumm.isEmpty()||dateFrom.isEmpty()||dateTo.isEmpty()){
            return "Error";
        }
        Double strahprime = 0.0;
        Double Tn = 0.0;
        Double Gp = 0.0;
        Double Pl = 0.0;
        Date dateFromd = new Date();
        Date dateTod = new Date();
        long colDays = 0;
        int colDayst = 0;
        SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");

        try {
            dateFromd = formatter.parse(dateFrom);
            dateTod = formatter.parse(dateTo);

        } catch (ParseException e) {
            e.printStackTrace();
        }
        // По типу недвижимости определяем коэффициент
        switch(typeDrawell) {
            case "Квартира":
                Tn = 1.7;
                break;
            case "Дом":
                Tn = 1.5;
                break;
            case "Комната":
                Tn = 1.3;
                break;
            default:
                Tn = 0.0;
                break;
        }
        // по году получаем коэф.
        if (Double.parseDouble(yearDrawell) < 2000.0){
            Gp = 1.3;
        }else if(Double.parseDouble(yearDrawell) >= 2000.0 && Double.parseDouble(yearDrawell)<= 2014.0){
            Gp = 1.6;
        }else{
            Gp = 2.0;
        }
        //по площади получаем коэф.
        if (Double.parseDouble(squareDrawell)< 50.0){
            Pl = 1.2;
        }else if(Double.parseDouble(squareDrawell)>= 50.0 && Double.parseDouble(squareDrawell)<= 100.0){
            Pl = 1.5;
        }else{
            Pl = 2.0;
        }
         // получим длительность договора(в днях)
         colDays = dateTod.getTime() - dateFromd.getTime();
         colDayst = (int) (colDays / (24 * 60 * 60 * 1000));
         //
        try{
            //посчитаем,в случае исключения присвоим 0
            strahprime =(Double.parseDouble(strachSumm)/colDayst)*Pl*Gp*Tn;
        }catch(Exception e){
            strahprime = 0.00;
        }

     return strahprime.toString();
    }
}
