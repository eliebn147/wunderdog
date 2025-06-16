import {Component, input} from '@angular/core';

@Component({
  selector: 'app-circural-progress',
  imports: [],
  templateUrl: './circural-progress.component.html',
  styleUrl: './circural-progress.component.scss'
})
export class CircuralProgressComponent {
  value = input<number>(0);
}
