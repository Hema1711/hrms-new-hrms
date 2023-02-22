import { Component } from '@angular/core';

@Component({
  selector: 'ngx-addjob',
  styleUrls: ['./addjob.component.scss'],
  templateUrl: './addjob.component.html',
})
export class AddJobComponent {


  gotoalert(): void {
    alert('Added successfully');
  }
}
