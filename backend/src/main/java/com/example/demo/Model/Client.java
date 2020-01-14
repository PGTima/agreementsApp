package com.example.demo.Model;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "clients")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "client_id")
    private long id;
    @Column(name = "client_name",nullable = false)
    private String name;
    @Column(name = "client_surname",nullable = false)
    private String surname;
    @Column(name = "client_patronymic",nullable = false)
    private String patronymic;
    @Column(name = "client_date_born",nullable = false)
    private Date dateBorn;
    @Column(name = "client_passport_series",nullable = false,length = 4)
    private String clientPassportSeries;
    @Column(name = "client_passport_number",nullable = false,length = 6)
    private String clientPassportNumber;

    public Client(){};
    public Client(String name, String surname, String patronymic, Date dateBorn, String clientPassportSeries, String clientPassportNumber) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.dateBorn = dateBorn;
        this.clientPassportSeries = clientPassportSeries;
        this.clientPassportNumber = clientPassportNumber;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public Date getDateBorn() {
        return dateBorn;
    }

    public void setDateBorn(Date dateBorn) {
        this.dateBorn = dateBorn;
    }

    public String getClientPassportSeries() {
        return clientPassportSeries;
    }

    public void setClientPassportSeries(String clientPassportSeries) {
        if (clientPassportSeries.length() > 4 || clientPassportSeries.length() < 0){
            throw new IllegalArgumentException("Длина  серии паспарта не может быть длинее 4 символов или пустой ");
        }else{
            this.clientPassportSeries = clientPassportSeries;
        }

    }

    public String getClientPassportNumber() {
        return clientPassportNumber;
    }

    public void setClientPassportNumber(String clientPassportNumber)
    {
        if (clientPassportNumber.length()> 6 || clientPassportNumber.length()<0){
            throw new IllegalArgumentException("Длина номера паспарта не может быть длинее 4 символов или пустой ");
        }else{
            this.clientPassportNumber = clientPassportNumber;
        }
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", patronymic='" + patronymic + '\'' +
                ", dateBorn=" + dateBorn +
                ", clientPassportSeries='" + clientPassportSeries + '\'' +
                ", clientPassportNumber='" + clientPassportNumber + '\'' +
                '}';
    }
}
