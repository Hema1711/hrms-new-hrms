import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-contract',
  templateUrl: './contract.component.html',
})
export class ContractComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  addcontract(): void {
    this.router.navigate(['pages/addcontract']);
  }
}
