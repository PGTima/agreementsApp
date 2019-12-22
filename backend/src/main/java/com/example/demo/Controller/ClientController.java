package com.example.demo.Controller;

import com.example.demo.Model.Client;
import com.example.demo.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {
    @Autowired
    public ClientService clientService;
    //добавить клиента в бд
    @CrossOrigin
    @RequestMapping(value = "/addClient",method = RequestMethod.POST)
    public Object addClient(@RequestBody Client client){
        if (client.getName().isEmpty()||client.getSurname().isEmpty()||client.getPatronymic().isEmpty()
                ||client.getClientPassportSeries().isEmpty()
                ||client.getClientPassportNumber().isEmpty()||client.getDateBorn()== null){
            return "NO_PARAMS";
        }else{
            try {

                Client cl = new Client(client.getName(),client.getSurname(),
                        client.getPatronymic(), client.getDateBorn(),
                        client.getClientPassportSeries(), client.getClientPassportNumber());
                return this.clientService.addClient(cl);
            }catch (Exception e) {
                System.out.println(e);
                return "ERROR";
            }
        }
    }
    //вывод всех пользователей
    @CrossOrigin
    @RequestMapping(value = "/allClient",method = RequestMethod.GET)
    public List<Client> allUsers(){
        return clientService.getAll();
    }
    //редактирование клиента
    @CrossOrigin
    @RequestMapping(value = "/editClient",method = RequestMethod.POST)
    public Object editClient(@RequestBody Client client) {
      if (client.getName().isEmpty()||client.getSurname().isEmpty()||client.getDateBorn().isEmpty()||client.getPatronymic().isEmpty()
              ||client.getClientPassportSeries().isEmpty()||client.getClientPassportNumber().isEmpty()){
          return "NO_PARAMS";
      }else{
          try{
              Client cl = clientService.findById(client.getId());
              if (cl==null){
                  return "NOT_DATA_FOUND";
              }else{
                  return clientService.editClient(client);
              }
          }
          catch(Exception e){
              System.out.println(e);
              return "ERROR";
          }
      }
    }
    //поиск клиента по ФИО
    @CrossOrigin
    @RequestMapping(value = "/findClient",method = RequestMethod.GET)
    public Object findClient(@RequestParam String name,
                             @RequestParam String surname,
                             @RequestParam String patronymic) {
        if (name.isEmpty() || surname.isEmpty() || patronymic.isEmpty()) {
             return "NO_PARAMS";
        } else {
            try {
                System.out.println(name);
                List<Client> clientList = clientService.findByNameAndSurnameAndPatronymic(name, surname, patronymic);
                if (clientList.size()>0){
                    return clientList;
                }
                else{
                    return "NOT_DATA_FOUND";
                }
            }catch(Exception e){
                System.out.println(e);
                return "ERROR";
            }
        }
    }

}
