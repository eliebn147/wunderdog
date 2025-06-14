import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {dashboardRoutes} from './dashboard/dashboard.routes';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: dashboardRoutes
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
