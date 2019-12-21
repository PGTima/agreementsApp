package com.example.demo.Service;


import com.example.demo.Model.Adress;
import com.example.demo.Model.Agreement;
import com.example.demo.Model.Client;

import java.util.List;

public interface AdressService {

    Adress addAgreement(Adress adress);
    List<Adress> getAll();
    Adress findById(long id);
    Adress editAdress(Adress adress);
}
