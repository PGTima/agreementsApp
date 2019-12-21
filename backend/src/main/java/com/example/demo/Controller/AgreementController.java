package com.example.demo.Controller;

import com.example.demo.Model.Agreement;
import com.example.demo.Model.Client;
import com.example.demo.Service.AgreementsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AgreementController {
    @Autowired
    public AgreementsService agreementsService;
    //добавить договор
    @RequestMapping(value = "/addAgreement",method = RequestMethod.POST)
    public Object addAgreement(@RequestBody Agreement agreement){
        // проверим на отсутствие параметров
        if (agreement.getAdressA()==null || agreement.getClientA() == null
                || agreement.getAgreementNumber().isEmpty()|| agreement.getSrok().isEmpty()
                || agreement.getSrachSumm().isEmpty()||agreement.getComment().isEmpty()
                ||agreement.getDateComplet().isEmpty()|| agreement.getDateRasheta() == null
                || agreement.getPrize().isEmpty()||agreement.getSeriesNomer().isEmpty()){
            return "NO_PARAMS";
        }else{
            try{
                return agreementsService.addAgreement(agreement);
            }catch(Exception e){
                System.out.println(e);
                return "ERROR";
            }
        }
    }
    //вывод всех договоров
    @CrossOrigin
    @RequestMapping(value = "/allAgreement",method = RequestMethod.GET)
    public List<Agreement> allAgreement(){
        return agreementsService.getAll();
    }
    //редактирование договора
    @RequestMapping(value = "/editAgreement",method = RequestMethod.POST)
    public Object editAgreement(@RequestBody Agreement agreement){
        if (agreement.getAdressA()==null || agreement.getClientA() == null
                || agreement.getAgreementNumber().isEmpty()|| agreement.getSrok().isEmpty()
                || agreement.getSrachSumm().isEmpty()||agreement.getComment().isEmpty()
                ||agreement.getDateComplet().isEmpty()|| agreement.getDateRasheta() == null
                || agreement.getPrize().isEmpty()||agreement.getSeriesNomer().isEmpty()){
            return "NO_PARAMS";
        }else{
            try{
                return agreementsService.editAgreement(agreement);
            }catch(Exception e){
                System.out.println(e);
                return "ERROR";
            }
        }
    }
    //поиск по клиенту договора
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
                 System.out.println(e);
                 return "ERROR";
             }
         }
    }
}
