import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  addjob(): void {
    this.router.navigate(['pages/addjob']);
  }
  interview(): void {
    this.router.navigate(['pages/interview']);
  }
  training(): void {
    this.router.navigate(['pages/training']);
  }
  addproj(): void {
    this.router.navigate(['pages/addproject']);
  }
}
