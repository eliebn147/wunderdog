import {Component, inject, OnInit} from '@angular/core';
import {DashboardService} from '../../dashboard.service';
import {DogProfileComponent} from '../../components/dog-profile/dog-profile.component';
import {Button} from 'primeng/button';
import {
  DogOverviewInformationCardsComponent
} from '../../components/dog-overview-information-cards/dog-overview-information-cards.component';
import {OverviewScoreComponent} from '../../components/overview-score/overview-score.component';
import {WeightTrendComponent} from '../../components/weight-trend/weight-trend.component';
import {AppInputComponent} from '../../../shared-components/app-input/app-input.component';
import {TreatmentPlanCardComponent} from '../../components/treatment-plan-card/treatment-plan-card.component';
import {Dialog} from 'primeng/dialog';
import {DogProfilePopupComponent} from '../../components/dog-profile-popup/dog-profile-popup.component';

@Component({
  selector: 'app-overview',
  imports: [
    DogProfileComponent,
    Button,
    DogOverviewInformationCardsComponent,
    OverviewScoreComponent,
    WeightTrendComponent,
    AppInputComponent,
    TreatmentPlanCardComponent,
    Dialog,
    DogProfilePopupComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  dashboardService = inject(DashboardService);

  async ngOnInit() {
    await this.dashboardService.loadProfile();
    await this.dashboardService.loadOverview();
  }
}
