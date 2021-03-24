import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../insurance';
import { InsuranceServiceService } from '../insurance-service.service';

@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-insurance.component.html',
  styleUrls: ['./create-insurance.component.css']
})
export class CreateInsuranceComponent implements OnInit {


  insurance: Insurance = new Insurance();
  submitted = false;
  constructor(private insuranceService: InsuranceServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    this.insuranceService
    .createInsuarance(this.insurance).subscribe(data => {
      console.log(data)
      this.insurance = new Insurance();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/insurances']);
  }
}
