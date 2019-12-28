package com.example.demo.Model;

import javax.persistence.*;

@Entity
@Table(name = "state")
public class State {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "state_name")
    private String stateName;

    public State(Long id, String stateName) {
        this.id = id;
        this.stateName = stateName;
    }

    public State() {
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

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        if (stateName==null){
            throw new IllegalArgumentException("Переданный stateName не может быть пустым!");
        }
        this.stateName = stateName;
    }

    @Override
    public String toString() {
        return "State{" +
                "id=" + id +
                ", stateName='" + stateName + '\'' +
                '}';
    }
}
