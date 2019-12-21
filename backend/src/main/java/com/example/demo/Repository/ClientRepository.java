package com.example.demo.Repository;

import com.example.demo.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
   Client findById(long id);
   List<Client> findByNameAndSurnameAndPatronymic(String name,String surname,String patronymic);
}
