import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class taskApi {

  private apiUrl = '/api/tasks';   // proxy forwards this to Spring Boot

  constructor(private http: HttpClient) {}

  // ✅ GET all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // ✅ POST create task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // ✅ PUT mark task complete
  markAsCompleted(id: number): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}/complete`, {});
  }
  
}
