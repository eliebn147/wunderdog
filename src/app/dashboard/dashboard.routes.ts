import { Routes } from '@angular/router';
import {OverviewComponent} from './pages/overview/overview.component';
import {KennelComponent} from './pages/kennel/kennel.component';

export const dashboardRoutes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'kennel',
    component: KennelComponent,
  },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }
];
