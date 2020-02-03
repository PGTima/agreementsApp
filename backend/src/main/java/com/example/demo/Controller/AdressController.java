package com.example.demo.Controller;

import com.example.demo.Model.Adress;
import com.example.demo.Model.Dwelling;
import com.example.demo.Service.AdresService;
import com.example.demo.Service.DwellingService;
import com.example.demo.Service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class AdressController {

    @Autowired
    public AdresService adresService;
    @Autowired
    private DwellingService dwellingService;
    @Autowired
    private StateService stateService;
    //вывод всех адресов
    @CrossOrigin
    @RequestMapping(value = "/findAdress",method = RequestMethod.GET)
    public Object getAdress(){
        return adresService.getAll();
    }
    @CrossOrigin
    @RequestMapping(value = "/getAdressById",method = RequestMethod.GET)
    public Object getAdressById(@RequestParam Integer id){
        if (id==null){
            return "NO_PARAMS";
        }else{
            return adresService.findById(id);
        }
    }
    @CrossOrigin
    @RequestMapping(value = "/addAdress",method = RequestMethod.POST)
    public Object addAdress(@RequestBody Adress adress){
        return adresService.addAdress(adress);
    }
    @CrossOrigin
    @RequestMapping(value = "/addDwelling",method = RequestMethod.POST)
    public Object addDrawelling(@RequestBody Dwelling dwelling){
        return dwellingService.addDwelling(dwelling);
    }
    @CrossOrigin
    @RequestMapping(value = "/allState",method = RequestMethod.GET)
    public Object getState(){
        return stateService.getAll();
    }
    @CrossOrigin
    @RequestMapping(value = "/alldwelling",method = RequestMethod.GET)
    public Object getDwelling(){
        return dwellingService.getAll();
    }
}
