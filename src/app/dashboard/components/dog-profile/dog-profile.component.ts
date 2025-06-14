import {Component, inject} from '@angular/core';
import {DashboardService} from '../../dashboard.service';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-dog-profile',
  imports: [
    Button
  ],
  templateUrl: './dog-profile.component.html',
  styleUrl: './dog-profile.component.scss'
})
export class DogProfileComponent {
  dashBoardService = inject(DashboardService);
}
