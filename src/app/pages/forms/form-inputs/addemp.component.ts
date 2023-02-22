import { Component } from '@angular/core';

@Component({
  selector: 'ngx-addemp',
  styleUrls: ['./addemp.component.scss'],
  templateUrl: './addemp.component.html',
})
export class AddEmpComponent {


  gotoalert(): void {
    alert('submitted successfully');
  }
}
