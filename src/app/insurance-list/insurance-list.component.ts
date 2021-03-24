import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Insurance } from '../insurance';
import { InsuranceServiceService } from '../insurance-service.service';
import { AutheticationService } from '../service/authetication.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {

  insurances!: Observable<Insurance[]>;

  insurance: Insurance = new Insurance;
  firstName: any;

  constructor(private insuranceService: InsuranceServiceService,public loginService:AutheticationService,
    private router: Router) {}

  ngOnInit() {
   // this.reloadData();
  }

  form = new FormGroup({  
    policyTypeCode : new FormControl(),  
  });  

  searchForm(searchInfo: any)  
  {  
    
     let policyTypeCode= this.policyTypeCode.value;
     this.insurance.policyTypeCode=policyTypeCode;

    console.log('this.employee.firstName'+policyTypeCode);

        this.getData(this.insurance);  
      // this.reloadData();
  }  
  get policyTypeCode()  
  {  
    
   return this.form.get('policyTypeCode')!;
   

  } 


  reloadData() {
   this.insurances = this.insuranceService.getInsuranceList();
    //console.log(this.employees);
  }

  getData(insurance: any)  
  {  
    console.log('start getData this.insurance.policyTypeCode'+this.insurance.policyTypeCode);
    this.insurances = this.insuranceService.getInsuranceListByPolicyTypeCode(this.insurance.policyTypeCode);
    console.log('end getData this.insurance.policyTypeCode'+this.insurance.policyTypeCode);

    this.checkSize();

  }  

  checkSize()
  {
if(this.insurances!==null){
  return true;
}else{
  return false;
}

 

  }

  add(){

    this.router.navigate(['add']);
  }
  deleteInsurance(id: number) {
    this.insuranceService.deleteInsuarances(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  insuranceDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateInsurance(id: number){
    this.router.navigate(['update', id]);
  }
}


