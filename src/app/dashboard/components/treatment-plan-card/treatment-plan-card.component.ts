import {Component, input} from '@angular/core';

@Component({
  selector: 'app-treatment-plan-card',
  imports: [],
  templateUrl: './treatment-plan-card.component.html',
  styleUrl: './treatment-plan-card.component.scss'
})
export class TreatmentPlanCardComponent {
  data = input<any>({});
}
