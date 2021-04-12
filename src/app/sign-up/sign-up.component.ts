import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
;
import { Router } from '@angular/router';
import { AdminDetail } from '../UserDetail';
import { EmployeeService } from '../employee.service';
import { InsuranceServiceService } from '../insurance-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private adminDetail = new AdminDetail();

  constructor(private adminService : InsuranceServiceService, private router : Router) { }

  ngOnInit() {
  }

  // create the form object.
  form = new FormGroup({
      firstName : new FormControl('' , Validators.required),
      email : new FormControl('' , Validators.required),
      password : new FormControl('' , Validators.required),
      confirmPassword : new FormControl('' , Validators.required),
      lastName : new FormControl('' , Validators.required),
  });

  AdminForm()
  {
     let pass = this.Password?.value;
     let confirmPass = this.ConfirmPassword?.value;

     if(pass == confirmPass)
     {
        this.adminDetail.firstName = this.firstName?.value;
        this.adminDetail.email = this.Email?.value;
        this.adminDetail.password = this.Password?.value;
        this.adminDetail.lastName = this.lastName?.value;
        this.adminDetail.username=this.firstName?.value;

        console.log("this.adminDetail.firstName"+this.adminDetail.firstName);
        console.log("this.adminDetail.firstName"+this.adminDetail.email);
        console.log("this.adminDetail.firstName"+this.adminDetail.password);
        console.log("this.adminDetail.firstName"+this.adminDetail.lastName);
        console.log("this.adminDetail.firstName"+this.adminDetail.username);


        
        


        this.adminService.saveAdminDetails(this.adminDetail).subscribe(
          response => {
             
            this.adminDetail=response;
              console.log("result"+this.adminDetail.email);

              if(response!=null)
              {
                this.router.navigate(['/login']);
              }
              else
              {
                  alert("error occur while registring User. please try after sometime.")
              }
          },
          error => {
            alert("error occur while registring User. please try after sometime.")
          }
        );
        
     }
     else
     {
        alert("Password and confirm password not match.");
     }
  }


  get firstName(){
    return this.form.get('firstName');
  }

  get Email(){
      return this.form.get('email');
  }

  get Password(){
      return this.form.get('password');
  }

  get ConfirmPassword(){
      return this.form.get('confirmPassword');
  }

  get lastName(){
      return this.form.get('lastName');
  }
  
}
