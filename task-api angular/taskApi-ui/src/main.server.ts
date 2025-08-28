import 'zone.js'; // ✅ Angular needs this unless using zoneless mode
import { bootstrapApplication } from '@angular/platform-browser';
import { TaskListComponent } from './app/components/task-api/task-api.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

const bootstrap = () => bootstrapApplication(TaskListComponent,{
  providers: [ provideHttpClient(withFetch()) ]
});

export default bootstrap;
