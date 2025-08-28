export interface Task {
  id?: number;         // optional because backend generates it
  title: string;
  description: string;
  dueDate: string;     // using string because Angular HttpClient will parse JSON
  completed: boolean;
}