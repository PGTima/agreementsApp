package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Agreements")
public class Agreement{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "agreement_id")
    private Long id;

    //связь договора и клиента
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="client_id")
    private Client clientId;

    //связь договора и адресса
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "adress_id")
    private Adress adressId;

    @Column(name = "agreement_number", length=6,nullable = false, unique = true)
    private String agreementNumber;
    @Column(name = "comment",nullable = false)
    private String comment;

    @Column(name="seriesNomer")
    private String seriesNomer;
    //дата создания
    @Column(name="dateComplet")
    private Date dateComplet;
    //премия
    @Column(name="prize")
    private String prize;
    //срок
    @Column(name="date_From")
    private Date dateFrom;
    @Column(name="date_To")
    private Date dateTo;
    //дата расчета
    @Column(name="dateRasheta")
    private Date dateRasheta;
    //страховая сумма
    @Column(name="srachSumm")
    private String srachSumm;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Client getClientId() {
        return clientId;
    }

    public void setClientId(Client clientId) {
        this.clientId = clientId;
    }

    public Adress getAdressId() {
        return adressId;
    }

    public void setAdressId(Adress adressId) {
        this.adressId = adressId;
    }

    public String getAgreementNumber() {
        return agreementNumber;
    }

    public void setAgreementNumber(String agreementNumber) {
        this.agreementNumber = agreementNumber;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getSeriesNomer() {
        return seriesNomer;
    }

    public void setSeriesNomer(String seriesNomer) {
        this.seriesNomer = seriesNomer;
    }

    public Date getDateComplet() {
        return dateComplet;
    }

    public void setDateComplet(Date dateComplet) {
        this.dateComplet = dateComplet;
    }

    public Agreement(Long id, Client clientId, Adress adressId, String agreementNumber, String comment, String seriesNomer, Date dateComplet, String prize, Date dateFrom, Date dateTo, Date dateRasheta, String srachSumm) {
        this.id = id;
        this.clientId = clientId;
        this.adressId = adressId;
        this.agreementNumber = agreementNumber;
        this.comment = comment;
        this.seriesNomer = seriesNomer;
        this.dateComplet = dateComplet;
        this.prize = prize;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.dateRasheta = dateRasheta;
        this.srachSumm = srachSumm;
    }

    public Date getDateRasheta() {
        return dateRasheta;
    }

    public void setDateRasheta(Date dateRasheta) {
        this.dateRasheta = dateRasheta;
    }

    public String getSrachSumm() {
        return srachSumm;
    }

    public void setSrachSumm(String srachSumm) {
        this.srachSumm = srachSumm;
    }

    public void setPrize(String prize) {
        this.prize = prize;
    }

    public Agreement() {
    }

    public Date getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(Date dateFrom) {
        this.dateFrom = dateFrom;
    }

    public Date getDateTo() {
        return dateTo;
    }

    public void setDateTo(Date dateTo) {
        this.dateTo = dateTo;
    }

    public String getPrize() {
        return prize;
    }

    public String getPrizeN(Dwelling dw ){
        Double summ=0.0;
        Double TH=0.0;
        Double GP=0.0;
        Double PD=0.0;
        //
        if (dw.getApartment()!=null &&dw.getHome()==null &&dw.getRoom()== null ){
            TH = 1.7;
        }else if (dw.getApartment()==null &&dw.getHome()!=null &&dw.getRoom()== null){
            TH = 1.5;
        }else if(dw.getApartment()==null &&dw.getHome()==null &&dw.getRoom()!= null){
            TH = 1.3;
        }
        if (dw.getDateDrawelling().getYear()==2015 ){
            GP = 2.0;
        }else if (dw.getDateDrawelling().getYear()>=2000 &&dw.getDateDrawelling().getYear()<=2014){
            GP = 1.6;
        }else if(dw.getDateDrawelling().getYear()<2000){
            GP = 1.3;
        }

        if (dw.getSquareDrawelling()<50 ){

            PD = 1.2;
        }else if (dw.getSquareDrawelling()<100 && dw.getSquareDrawelling()>50){
            PD = 1.5;
        }else if(dw.getSquareDrawelling()>100){
            PD = 2.0;
        }
        summ = (Double.valueOf(this.getSrachSumm())/
                Double.valueOf((int)(this.getDateTo().getTime()- this.getDateFrom().getTime())/(24*60*60*1000)))*TH*GP*PD;
        return summ.toString();
    }

    @Override
    public String toString() {
        return "Agreement{" +
                "id=" + id +
                ", clientId=" + clientId +
                ", adressId=" + adressId +
                ", agreementNumber='" + agreementNumber + '\'' +
                ", comment='" + comment + '\'' +
                ", seriesNomer='" + seriesNomer + '\'' +
                ", dateComplet=" + dateComplet +
                ", prize='" + prize + '\'' +
                ", dateFrom=" + dateFrom +
                ", dateTo=" + dateTo +
                ", dateRasheta=" + dateRasheta +
                ", srachSumm='" + srachSumm + '\'' +
                '}';
    }
}
