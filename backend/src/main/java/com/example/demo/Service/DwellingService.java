package com.example.demo.Service;

import com.example.demo.Model.Client;
import com.example.demo.Model.Dwelling;

import java.util.List;

public interface DwellingService {
    Dwelling addDwelling(Dwelling dwelling);
    List<Dwelling> getAll();
    Dwelling findById(long id);
    Dwelling editDwelling(Dwelling dwelling);
}
