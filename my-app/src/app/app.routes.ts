import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { EducationComponent } from './pages/education/education.component';

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'education', component: EducationComponent},
  {path: '**', redirectTo: ''}
];
