package com.example.demo.Model;

import javax.persistence.*;

@Entity
@Table(name = "adress")
public class Adress {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "adress_id")
    private Long id;
     //связь с государством

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="state_id")
    private State stateA;
    //связь с типом недвижимости
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="dwelling_id")
    private Dwelling dwellingA;
    @Column(name = "indexA")
    private String indexA;
    @Column(name = "edge")
    private String edge;
    @Column(name = "district")
    private String district;
    @Column(name = "punkt")
    private String punkt;
    @Column(name = "korpus")
    private String korpus;
    @Column(name = "buld")
    private String buld;
    @Column(name = "street")
    private String street;

    public Adress(Long id, State stateA, Dwelling dwellingA, String indexA, String edge, String district, String punkt, String korpus, String buld,String street) {
        if (id==null || stateA == null ||dwellingA == null || indexA==null||edge==null||district==null
                ||punkt==null||korpus==null||buld==null|| street==null ){
            throw new IllegalArgumentException("Переданные параметры не могут быть пустыми!");
        }
        this.id = id;
        this.stateA = stateA;
        this.dwellingA = dwellingA;
        this.indexA = indexA;
        this.edge = edge;
        this.district = district;
        this.punkt = punkt;
        this.korpus = korpus;
        this.buld = buld;
        this.street=street;
    }

    public Adress() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        if (id==null){
            throw new IllegalArgumentException("Переданный id не может быть пустым!");
        }

        this.id = id;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public State getStateA() {
        return stateA;
    }

    public void setStateA(State stateA) {
        if (stateA==null){
            throw new IllegalArgumentException("Переданный stateA не может быть пустым!");
        }
        this.stateA = stateA;
    }

    public Dwelling getDwellingA() {
        return dwellingA;
    }

    public void setDwellingA(Dwelling dwellingA) {
        if (dwellingA==null){
            throw new IllegalArgumentException("Переданный dwellingA не может быть пустым!");
        }
        this.dwellingA = dwellingA;
    }

    public String getIndexA() {
        return indexA;
    }

    public void setIndexA(String indexA) {
        if (indexA==null){
            throw new IllegalArgumentException("Переданный dwellingA не может быть пустым!");
        }
        this.indexA = indexA;
    }

    public String getEdge() {
        return edge;
    }

    public void setEdge(String edge) {
        if (edge==null){
            throw new IllegalArgumentException("Переданный edge не может быть пустым!");
        }
        this.edge = edge;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        if (district==null){
            throw new IllegalArgumentException("Переданный district не может быть пустым!");
        }
        this.district = district;
    }

    public String getPunkt() {
        return punkt;
    }

    public void setPunkt(String punkt) {
        if (punkt==null){
            throw new IllegalArgumentException("Переданный punkt не может быть пустым!");
        }
        this.punkt = punkt;
    }

    public String getKorpus() {
        return korpus;
    }

    public void setKorpus(String korpus) {
        if (korpus==null){
            throw new IllegalArgumentException("Переданный korpus не может быть пустым!");
        }
        this.korpus = korpus;
    }

    public String getBuld() {
        return buld;
    }

    public void setBuld(String buld) {
        if (buld==null){
            throw new IllegalArgumentException("Переданный buld не может быть пустым!");
        }
        this.buld = buld;
    }

    @Override
    public String toString() {
        return "Adress{" +
                "id=" + id +
                ", stateA=" + stateA +
                ", dwellingA=" + dwellingA +
                ", indexA='" + indexA + '\'' +
                ", edge='" + edge + '\'' +
                ", district='" + district + '\'' +
                ", punkt='" + punkt + '\'' +
                ", korpus='" + korpus + '\'' +
                ", buld='" + buld + '\'' +
                ", street='" + street + '\'' +
                '}';
    }
}
