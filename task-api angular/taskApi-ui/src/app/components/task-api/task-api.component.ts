import { Component } from '@angular/core';
import { taskApi } from '../../services/task-api.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'task-api.component.html',
  styleUrls: ['task-api.component.css']
})
export class TaskListComponent {

  tasks: Task[] = [];

  constructor(private taskApi: taskApi) {}

  ngOnInit(): void {
    this.taskApi.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
}
