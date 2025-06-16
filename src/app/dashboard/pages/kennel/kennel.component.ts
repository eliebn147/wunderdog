import { Component } from '@angular/core';
import {AppInputComponent} from "../../../shared-components/app-input/app-input.component";
import {
  DogOverviewInformationStatusComponent
} from '../../components/dog-overview-information-cards/dog-overview-information-status/dog-overview-information-status.component';

@Component({
  selector: 'app-kennel',
  imports: [
    AppInputComponent,
    DogOverviewInformationStatusComponent
  ],
  templateUrl: './kennel.component.html',
  styleUrl: './kennel.component.scss'
})
export class KennelComponent {
  items = Array.from({ length: 42 }, (_, i) => `Item ${i + 1}`);
}
