import { Component } from '@angular/core';

@Component({
  selector: 'ngx-interview',
  styleUrls: ['./interview.component.scss'],
  templateUrl: './interview.component.html',
})
export class InterviewComponent {

 gotoalert(): void {
    alert('Added successfully');
  }
}
