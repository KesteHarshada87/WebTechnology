import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { StudentListComponent } from './student-list/student-list';
import { StudentFormComponent } from './student-form/student-form';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: StudentListComponent },
  { path: 'add', component: StudentFormComponent }
];