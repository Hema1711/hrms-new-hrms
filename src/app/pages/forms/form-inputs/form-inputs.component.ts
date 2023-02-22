import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  constructor(private route:ActivatedRoute,private router:Router) { }
  addemp(): void {
    this.router.navigate(['/pages/forms/addemp']);
  }
}
