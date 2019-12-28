package com.example.demo.Model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "dwelling")
public class Dwelling {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @Column(name = "apartment")
    private Integer apartment;
    @Column(name = "home")
    private Integer home;
    @Column(name = "room")
    private Integer room;
    @Column(name = "date_dwelling")
    private Date dateDrawelling;
    @Column(name = "square_dwelling")
    private Float squareDrawelling;

    public Dwelling(Long id, Integer apartment, Integer home, Integer room, Date dateDrawelling, Float squareDrawelling) {
        this.id = id;
        this.apartment = apartment;
        this.home = home;
        this.room = room;
        this.dateDrawelling = dateDrawelling;
        this.squareDrawelling = squareDrawelling;
    }

    public Dwelling() {
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

    public Integer getApartment() {
        return apartment;
    }

    public void setApartment(Integer apartment) {
        this.apartment = apartment;
    }

    public Integer getHome() {
        return home;
    }

    public void setHome(Integer home) {
        this.home = home;
    }

    public Integer getRoom() {
        return room;
    }

    public void setRoom(Integer room) {
        this.room = room;
    }

    public Date getDateDrawelling() {
        return dateDrawelling;
    }

    public void setDateDrawelling(Date dateDrawelling) {
        this.dateDrawelling = dateDrawelling;
    }

    public Float getSquareDrawelling() {
        return squareDrawelling;
    }

    public void setSquareDrawelling(Float squareDrawelling) {
        this.squareDrawelling = squareDrawelling;
    }

    @Override
    public String toString() {
        return "Dwelling{" +
                "id=" + id +
                ", apartment=" + apartment +
                ", home=" + home +
                ", room=" + room +
                ", dateDrawelling=" + dateDrawelling +
                ", squareDrawelling=" + squareDrawelling +
                '}';
    }
}
