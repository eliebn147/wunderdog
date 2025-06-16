import {Component, inject, signal} from '@angular/core';
import {Button} from 'primeng/button';
import {OverviewScoreComponent} from '../overview-score/overview-score.component';
import {DashboardService} from '../../dashboard.service';
import {
  DogOverviewInformationStatusComponent
} from '../dog-overview-information-cards/dog-overview-information-status/dog-overview-information-status.component';
import {WeightTrendComponent} from '../weight-trend/weight-trend.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dog-profile-popup',
  imports: [
    Button,
    OverviewScoreComponent,
    DogOverviewInformationStatusComponent,
    WeightTrendComponent
  ],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ],
  templateUrl: './dog-profile-popup.component.html',
  styleUrl: './dog-profile-popup.component.scss'
})
export class DogProfilePopupComponent {
  protected dashBoardService = inject(DashboardService);
  showFullRecord = signal<boolean>(false);
}
