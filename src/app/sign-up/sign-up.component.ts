import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  public adminDetail = new AdminDetail();
  registerForm!: FormGroup;
  submitted=false;

  constructor(private adminService : InsuranceServiceService, private router : Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
  

  // create the form object.
 /* this.registerForm = new FormGroup({
      firstName : new FormControl('' , Validators.required),
      email : new FormControl('' , Validators.required),
      password : new FormControl('' , Validators.required),
      confirmPassword : new FormControl('' , Validators.required),
      lastName : new FormControl('' , Validators.required),
  });*/
  this.registerForm = this.formBuilder.group ({
    firstName : ['' , Validators.required],
    lastName : ['' , Validators.required],
    password : ['' , Validators.required,Validators.minLength(5)],
    email : ['' ,[ Validators.required,Validators.email]],
    confirmPassword : ['' , Validators.required,Validators.minLength(5)],
});

}
  get f(){
    return this.registerForm?.controls;
    
      }
  AdminForm()
  {

    this.submitted=true;

    if(this.registerForm.invalid){

      return;
    }
    let pass = this.Password?.value;
     let confirmPass = this.ConfirmPassword?.value;
     if(this.registerForm.invalid){
       return;
     }

     if(pass == confirmPass)
     {
        this.adminDetail.firstName = this.firstName?.value;
        this.adminDetail.email = this.Email?.value;
        this.adminDetail.password = this.Password?.value;
        this.adminDetail.lastName = this.lastName?.value;
        this.adminDetail.username=this.firstName?.value;

        
        


        
        


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
    return this.registerForm.get('firstName');
  }

  get Email(){
      return this.registerForm.get('email');
  }

  get Password(){
      return this.registerForm.get('password');
  }

  get ConfirmPassword(){
      return this.registerForm.get('confirmPassword');
  }

  get lastName(){
      return this.registerForm.get('lastName');
  }

  
  
}
