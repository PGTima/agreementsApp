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
    public State(){};
    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public State(Long id, String stateName) {
        this.id = id;
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
