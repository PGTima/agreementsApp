package com.example.demo.Service;

import com.example.demo.Model.Client;
import com.example.demo.Model.Dwelling;
import com.example.demo.Repository.ClientRepository;
import com.example.demo.Repository.DwellingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DwellingServiceImpl implements DwellingService {
    @Autowired
    private DwellingRepository dwellingRepository;
    @Override
    public Dwelling addDwelling(Dwelling dwelling) {
        Dwelling saveddw = dwellingRepository.save(dwelling);
        return saveddw;
    }
    @Override
    public List<Dwelling> getAll() {
        return dwellingRepository.findAll();
    }
    @Override
    public Dwelling findById(long id){
        return dwellingRepository.getOne(id);
    }

    @Override
    public Dwelling editDwelling(Dwelling dwelling){
        return dwellingRepository.saveAndFlush(dwelling);
    }
}
