import {Component, input} from '@angular/core';
import {CircuralProgressComponent} from "../../../shared-components/circural-progress/circural-progress.component";

@Component({
  selector: 'app-overview-score',
    imports: [
        CircuralProgressComponent
    ],
  templateUrl: './overview-score.component.html',
  styleUrl: './overview-score.component.scss'
})
export class OverviewScoreComponent {
  label = input<string>('');
  severity = input<'primary' | 'secondary'>('primary')
}
