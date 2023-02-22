import { Component } from '@angular/core';

@Component({
  selector: 'ngx-addleave',
  styleUrls: ['./addleave.component.scss'],
  templateUrl: './addleave.component.html',
})
export class AddLeaveComponent {

  gotoalert(): void {
    alert('Added successfully');
  }
}
