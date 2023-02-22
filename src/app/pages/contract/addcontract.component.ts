import { Component } from '@angular/core';

@Component({
  selector: 'ngx-addcontract',
  styleUrls: ['./addcontract.component.scss'],
  templateUrl: './addcontract.component.html',
})
export class AddContractComponent {
  gotoalert(): void {
    alert('Added successfully');
  }
}
