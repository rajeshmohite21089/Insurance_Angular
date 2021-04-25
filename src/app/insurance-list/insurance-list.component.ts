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
  insurancess: Array<any>;
  totalRecords!: string;
  

  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [3, 6, 9, 12];


  insurance: Insurance = new Insurance;
  firstName: any;
  userId:number | undefined;

  constructor(private insuranceService: InsuranceServiceService,public loginService:AutheticationService,
    private router: Router) {

      this.insurancess=new Array<any>();
    }

  ngOnInit() {

    this.userId=Number(sessionStorage.getItem("userId"));
    this.reloadData(this.userId);
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


  reloadData(id:number) {
     this.insuranceService.getInsuranceList(id)
    
    .subscribe((data)=>{
      console.log(data);
      this.insurancess=data;
      this.totalRecords=this.insurancess.length.toString();
   })
    
  }

  getData(insurance: any)  
  {  
    this.insurances = this.insuranceService.getInsuranceListByPolicyTypeCode(this.insurance.policyTypeCode);

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
        //  this.reloadData(this.userId);
        },
        error => console.log(error));
  }

  insuranceDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateInsurance(id: number){
    this.router.navigate(['update', id]);
  }

  onTableSizeChange(event: { target: { value: number; }; }): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.userId=Number(sessionStorage.getItem("userId"));
    this.reloadData(this.userId);
  }  
  onTableDataChange(event: number){
    this.page = event;
    this.userId=Number(sessionStorage.getItem("userId"));
    this.reloadData(this.userId);
  } 
}


