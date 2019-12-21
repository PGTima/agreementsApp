package com.example.demo.Service;

import com.example.demo.Model.Adress;
import com.example.demo.Model.Agreement;
import com.example.demo.Model.Client;
import com.example.demo.Repository.AdressRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AdressServiceImpl implements AdressService {

    @Autowired
    private AdressRepository adressRepository;
    @Override
    public Adress addAgreement(Adress adress){
        Adress adr = adressRepository.saveAndFlush(adress);
        return adr;
    }
    @Override
    public List<Adress> getAll(){
        return adressRepository.findAll();
    }
    @Override
    public Adress findById(long id){
        return adressRepository.getOne(id);
    }

    @Override
    public Adress editAdress(Adress adress){
        return adressRepository.saveAndFlush(adress);
    }
}
