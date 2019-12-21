package com.example.demo.Service;

import com.example.demo.Model.Client;

import java.util.List;

//интерфейс для работы с клиентом
public interface ClientService {
    Client addClient(Client client);
    List<Client> getAll();
    Client findById(long id);
    List<Client> findByNameAndSurnameAndPatronymic(String name,String surname,String patronymic);
    Client editClient(Client client);
}
