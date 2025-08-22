package com.poc1.task_api.taskController;

import com.poc1.task_api.entity.Task;
import com.poc1.task_api.service.taskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController   
@RequestMapping("/api/tasks") 
public class taskController {

    @Autowired
    private taskService taskService;

    
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.saveTask(task);
    }

    
    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTask();
    }

    
    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id).orElse(null);
    }

    
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

    @PutMapping("/{id}/complete")
    public Task markTaskCompleted(@PathVariable Long id) {
        return taskService.markTaskAsCompleted(id);
    }
}
