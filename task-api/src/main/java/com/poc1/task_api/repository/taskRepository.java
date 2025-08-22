package com.poc1.task_api.repository;

import com.poc1.task_api.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface taskRepository extends JpaRepository<Task, Long> {
    
}
