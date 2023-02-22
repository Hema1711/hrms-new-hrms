import { Component } from '@angular/core';

@Component({
  selector: 'ngx-training',
  styleUrls: ['./training.component.scss'],
  templateUrl: './training.component.html',
})
export class TrainingComponent {

  gotoalert(): void {
    alert('Added successfully');
  }
}
