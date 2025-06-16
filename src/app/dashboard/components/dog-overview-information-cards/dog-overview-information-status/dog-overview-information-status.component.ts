import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-dog-overview-information-status',
  imports: [
    NgClass
  ],
  templateUrl: './dog-overview-information-status.component.html',
  styleUrl: './dog-overview-information-status.component.scss'
})
export class DogOverviewInformationStatusComponent {
  severity = input<'success' | 'warning'>('success');
  value = input<string>('');
}
