import 'zone.js'; // ✅ Angular needs this unless using zoneless mode
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // ✅ HttpClient provider
import { TaskListComponent } from './app/components/task-api/task-api.component';


bootstrapApplication(TaskListComponent, {
  providers: [
     provideHttpClient(withFetch()) // ✅ this makes HttpClient available everywhere
  ]
}).catch(err => console.error(err));
