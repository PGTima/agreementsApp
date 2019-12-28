package com.example.demo.Service;

import com.example.demo.Model.Client;
import com.example.demo.Model.State;

import java.util.List;

public interface StateService {
    State addState(State state);
    List<State> getAll();
    State findById(long id);
}
