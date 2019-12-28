package com.example.demo.Service;

import com.example.demo.Model.Adress;
import com.example.demo.Repository.AdressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdressServiceImpl implements AdresService {

    @Autowired
    private AdressRepository adressRepository;

    @Override
    public Adress addAdress(Adress adress) {
        Adress saveddw = adressRepository.save(adress);
        return saveddw;
    }
    @Override
    public  Adress findById(long id){
        return adressRepository.getOne(id);
    }
    @Override
    public List<Adress> getAll(){
        return adressRepository.findAll();
    }

}
