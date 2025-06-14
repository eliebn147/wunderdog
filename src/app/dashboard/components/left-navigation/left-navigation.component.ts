import {Component, inject} from '@angular/core';
import {GlobalService} from '../../../global.service';
import {DashboardService} from '../../dashboard.service';

@Component({
  selector: 'app-left-navigation',
  imports: [],
  templateUrl: './left-navigation.component.html',
  styleUrl: './left-navigation.component.scss'
})
export class LeftNavigationComponent {
  protected globalService = inject(GlobalService);
  protected dashboardService = inject(DashboardService);

  navigateTo(module: string, path: string) {
    this.dashboardService.setActiveRoute(path);
    this.globalService.navigateTo(module, path);
  }
}
