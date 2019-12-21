package com.example.demo.Service;

import com.example.demo.Model.Client;
import com.example.demo.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;
    @Override
    public Client addClient(Client client) {
        Client savedClient = clientRepository.save(client);
        return savedClient;
    }
    @Override
    public List<Client> getAll() {
        return clientRepository.findAll();
    }
    @Override
    public Client findById(long id){
        return clientRepository.findById(id);
    }
    @Override
    public List<Client> findByNameAndSurnameAndPatronymic(String name,String surname,String patronymic){
        return clientRepository.findByNameAndSurnameAndPatronymic(name, surname, patronymic);
    }
    @Override
    public Client editClient(Client client){
        return clientRepository.saveAndFlush(client);
    }
}
