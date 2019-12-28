package com.example.demo.Controller;

import com.example.demo.Service.AdresService;
import com.example.demo.Service.DwellingService;
import com.example.demo.Service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
