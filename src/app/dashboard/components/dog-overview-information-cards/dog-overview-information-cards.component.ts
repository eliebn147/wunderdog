import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-dog-overview-information-cards',
  imports: [
    NgClass
  ],
  templateUrl: './dog-overview-information-cards.component.html',
  styleUrl: './dog-overview-information-cards.component.scss'
})
export class DogOverviewInformationCardsComponent {
  severity = input<'success' | 'warning'>('success');
  title = input<string>('');
  value = input<string>('');
}
