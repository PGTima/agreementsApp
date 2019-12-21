package com.example.demo.Service;

import com.example.demo.Model.Adress;
import com.example.demo.Model.Agreement;
import com.example.demo.Model.Client;
import com.example.demo.Repository.AgreementsRepository;
import com.example.demo.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgreementServiceImpl implements AgreementsService {
    @Autowired
    private AgreementsRepository agreementsRepository;

    @Override
    public Agreement addAgreement(Agreement agreement){
        Agreement agr =agreementsRepository.saveAndFlush(agreement);
        return agr;
    }
    @Override
    public List<Agreement> getAll(){
        return agreementsRepository.findAll();
    }
    @Override
    public Agreement findById(long id){
        return agreementsRepository.findById(id);
    }
    @Override
    public List<Agreement> findByClientId(long id){
        return agreementsRepository.findByClientId(id);
    }
    @Override
    public List<Agreement> findByAdressId(long id){
        return agreementsRepository.findByAdressId(id);
    }
    @Override
     public Agreement editAgreement(Agreement agreement){
        return agreementsRepository.saveAndFlush(agreement);
    }

}
