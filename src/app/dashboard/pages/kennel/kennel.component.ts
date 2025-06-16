import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AppInputComponent} from "../../../shared-components/app-input/app-input.component";
import {
  DogOverviewInformationStatusComponent
} from '../../components/dog-overview-information-cards/dog-overview-information-status/dog-overview-information-status.component';
import {scheduler} from 'dhtmlx-scheduler';

@Component({
  selector: 'app-kennel',
  imports: [
    AppInputComponent,
    DogOverviewInformationStatusComponent
  ],
  templateUrl: './kennel.component.html',
  styleUrl: './kennel.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class KennelComponent implements OnInit {
  @ViewChild("scheduler_here", { static: true }) schedulerContainer!: ElementRef;
  items = Array.from({ length: 42 }, (_, i) => `Item ${i + 1}`);

  ngOnInit() {
    scheduler.init(this.schedulerContainer.nativeElement, new Date(2024, 9, 1));
  }
}
