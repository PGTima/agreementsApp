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

    /**
     * API по добавлению клиента
     * @param client
     * @return
     */
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
                return "ERROR";
            }
        }
    }

    /**
     * API  вывода списка всех клиентов
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/allClient",method = RequestMethod.GET)
    public List<Client> allUsers(){
        return clientService.getAll();
    }

    /**
     * API редактирование клиента
     * @param client
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/editClient",method = RequestMethod.POST)
    public Object editClient(@RequestBody Client client) {
      if (client.getName().isEmpty()||client.getSurname().isEmpty()||client.getDateBorn() == null||client.getPatronymic().isEmpty()
              ||client.getClientPassportSeries().isEmpty()||client.getClientPassportNumber().isEmpty()){
          return "NO_PARAMS";
      }else{
          try{
              Client cl = clientService.findById(client.getId());
              if (cl == null){
                  return "NOT_DATA_FOUND";
              }else{
                  return clientService.editClient(client);
              }
          }
          catch(Exception e){
              return "ERROR";
          }
      }
    }

    /**
     * API поиска клиента по ФИО
     * @param name
     * @param surname
     * @param patronymic
     * @return
     */
    @CrossOrigin
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
                return "ERROR";
            }
        }
    }

    /**
     * API поиска клиента по серии и номеру паспорта
     * @param series
     * @param nomer
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/findClientBySeriesNomer",method = RequestMethod.GET)
    public Object findClientBySeriesNomer(@RequestParam String series,
                             @RequestParam String nomer) {
        if (series.isEmpty() || nomer.isEmpty() ) {
            return "NO_PARAMS";
        } else {
            try {
                List<Client> clientList = clientService.findByClientPassportSeriesAndClientPassportNumber(series,nomer);
                if (clientList.size() > 0){
                    return true;
                }
                else{
                    return false;
                }
            }
            catch(Exception e){
                return false;
            }
        }
    }

}
