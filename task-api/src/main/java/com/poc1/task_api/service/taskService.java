package com.poc1.task_api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.poc1.task_api.entity.Task;
import com.poc1.task_api.repository.taskRepository;

@Service

public class taskService {

@Autowired
private taskRepository taskRep;

public Task saveTask(Task task){
        return taskRep.save(task);
    }

public List<Task> getAllTask(){
    return taskRep.findAll();
}

public Optional<Task> getTaskById(Long id){
    return taskRep.findById(id);
}

public void deleteTask(Long id){
    taskRep.deleteById(id);
}

public Task markTaskAsCompleted(Long id){
    Optional<Task> taskOpt = taskRep.findById(id);
    if(taskOpt.isPresent()){
        Task task = taskOpt.get();
        task.setCompleted(true);
        return taskRep.save(task);
    }else{
        return null;
    }
}
}
