import {Component, inject, OnInit} from '@angular/core';
import {DashboardService} from '../../dashboard.service';
import {DogProfileComponent} from '../../components/dog-profile/dog-profile.component';

@Component({
  selector: 'app-overview',
  imports: [
    DogProfileComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  dashboardService = inject(DashboardService);

  async ngOnInit() {
    await this.dashboardService.loadProfile();
  }
}
