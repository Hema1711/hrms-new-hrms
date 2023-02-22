import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-events',
  templateUrl: './events.component.html',
})
export class EventsComponent {
Reports = [
      {
         id: 'ABC8441189035',
         department: 'IT',
         designation: 'Software',
         Total_employees: '0',
      },
      {
         id: 'ABC8441189035',
         department: 'Civil',
         designation: 'Site Engineering',
         Total_employees: '0',
      },
      {
         id: 'ABC8441189035',
         department: 'HR',
         designation: 'HR Manager',
         Total_employees: '0',
      },
      {
         id: 'ABC8441189035',
         department: 'Sales',
         designation: 'Sales Manger',
         Total_employees: '0',
      },
      {
         id: 'ABC8441189035',
         department: 'Account',
         designation: 'Account Manager',
         Total_employees: '0',
      },
   ];
   constructor(private route: ActivatedRoute, private router: Router) { }
   addept(): void {
      this.router.navigate(['pages/addept']);
   }
}
