package com.example.demo.Service;


import com.example.demo.Model.Adress;
import com.example.demo.Model.Agreement;
import com.example.demo.Model.Client;

import java.util.List;

public interface AgreementsService {

    Agreement addAgreement(Agreement agreement);
    List<Agreement> getAll();
    Agreement findById(long id);
    List<Agreement> findByClientId(long id );
    List<Agreement> findByAdressId(long id);
    Agreement editAgreement(Agreement agreement);

}
