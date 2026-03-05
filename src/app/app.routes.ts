import { Routes } from '@angular/router';
import { DashboardPage } from './Pages/Dashboard-page/Dashboard-page';

export const routes: Routes = [
  { path: '', component: DashboardPage },
  { path: '**', redirectTo: '' }
];
