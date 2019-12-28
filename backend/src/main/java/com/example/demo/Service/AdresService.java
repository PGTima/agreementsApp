package com.example.demo.Service;


import com.example.demo.Model.Adress;

import java.util.List;

public interface AdresService {
    Adress addAdress(Adress adress);
    List<Adress> getAll();
    Adress findById(long id);
}
