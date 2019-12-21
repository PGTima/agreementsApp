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
    @RequestMapping(value = "/addClient",method = RequestMethod.GET)
    public Object addClient(@RequestParam String name, @RequestParam String surname
            , @RequestParam String patronymic, @RequestParam String dateBorn
            , @RequestParam String clientPassportSeries, @RequestParam String clientPassportNumber){
        if (name.isEmpty()||surname.isEmpty()||patronymic.isEmpty()
                ||dateBorn.isEmpty()||clientPassportNumber.isEmpty()
                ||clientPassportSeries.isEmpty()){
            return "NO_PARAMS";
        }else{
            try {

                Client client = new Client(name, surname, patronymic, dateBorn, clientPassportSeries, clientPassportNumber);
                return this.clientService.addClient(client);
            }catch (Exception e) {
                System.out.println(e);
                return "ERROR";
            }
        }
    }
    //вывод всех пользователей
    @RequestMapping(value = "/allClient",method = RequestMethod.GET)
    public List<Client> allUsers(){
        return clientService.getAll();
    }
    //редактирование клиента
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
    @RequestMapping(value = "/findClient",method = RequestMethod.GET)
    public Object findClient(@RequestParam String name,
                             @RequestParam String surname,
                             @RequestParam String patronymic) {
        if (name.isEmpty() || surname.isEmpty() || patronymic.isEmpty()) {
             return "NO_PARAMS";
        } else {
            try {
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
