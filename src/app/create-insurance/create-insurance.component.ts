import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../insurance';
import { InsuranceServiceService } from '../insurance-service.service';
import { User } from '../user';

@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-insurance.component.html',
  styleUrls: ['./create-insurance.component.css']
})
export class CreateInsuranceComponent implements OnInit {


  insurance: Insurance = new Insurance();
  user:User=new User;
  
  submitted = false;
  constructor(private insuranceService: InsuranceServiceService,
    private router: Router) {

      this.insurance.user=this.user;
     }

  ngOnInit(): void {
    
    this.getInsuranceId();
  }
  save() {
    this.user.id=sessionStorage.getItem("userId");
    this.insurance.user=this.user;
    
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
  list()
  {
    this.router.navigate(['insurances']);
  }

  gotoList() {
    this.router.navigate(['/insurances']);
  }
  getInsuranceId() {
    this.insuranceService.getInsuarancesId()
      .subscribe(
        data => {
          console.log(data);

          this.insurance.id=data;
         
          
        },
        error => console.log(error));
  }
}
