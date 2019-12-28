package com.example.demo.Service;

import com.example.demo.Model.Dwelling;
import com.example.demo.Model.State;
import com.example.demo.Repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateServiceImpl implements StateService {
    @Autowired
    public StateRepository stateRepository;
    @Override
    public State addState(State state){
        State savedst = stateRepository.save(state);
        return savedst;
    }
    @Override
    public List<State> getAll(){
        return stateRepository.findAll();
    }
    @Override
    public State findById(long id){
        return stateRepository.getOne(id);
    }

}
