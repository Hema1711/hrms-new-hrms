import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'ngx-leave',
  templateUrl: './leave.component.html',
})
export class LeaveComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }


  addleave(): void {
    this.router.navigate(['pages/addleave']);
  }
}
