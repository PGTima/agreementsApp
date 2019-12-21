package com.example.demo.Repository;


import com.example.demo.Model.Adress;
import com.example.demo.Model.Agreement;

import com.example.demo.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgreementsRepository extends JpaRepository<Agreement,Long> {
    Agreement findById(long id);
    List<Agreement> findByClientId(long id );
    List<Agreement> findByAdressId(long id);
}
