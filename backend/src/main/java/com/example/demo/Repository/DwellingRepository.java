package com.example.demo.Repository;

import com.example.demo.Model.Dwelling;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DwellingRepository extends JpaRepository<Dwelling, Long> {

}
