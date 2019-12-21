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

public Adress(){};
    public String getIndexA() {
        return indexA;
    }

    public void setIndexA(String indexA) {
        this.indexA = indexA;
    }

    public String getEdge() {
        return edge;
    }

    public void setEdge(String edge) {
        this.edge = edge;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getPunkt() {
        return punkt;
    }

    public void setPunkt(String punkt) {
        this.punkt = punkt;
    }

    public String getKorpus() {
        return korpus;
    }

    public void setKorpus(String korpus) {
        this.korpus = korpus;
    }

    public String getBuld() {
        return buld;
    }

    public Adress(Long id, State stateA, Dwelling dwellingA, String indexA, String edge, String district, String punkt, String korpus, String buld) {
        this.id = id;
        this.stateA = stateA;
        this.dwellingA = dwellingA;
        this.indexA = indexA;
        this.edge = edge;
        this.district = district;
        this.punkt = punkt;
        this.korpus = korpus;
        this.buld = buld;
    }

    public void setBuld(String buld) {
        this.buld = buld;
    }
}
