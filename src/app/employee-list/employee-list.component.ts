import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AutheticationService } from '../service/authetication.service';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees!: Observable<Employee[]>;

  employee: Employee = new Employee;
  firstName: any;

  constructor(private employeeService: EmployeeService,public loginService:AutheticationService,
    private router: Router) {}

  ngOnInit() {
   // this.reloadData();
  }

  form = new FormGroup({  
    firstName : new FormControl(),  
  });  

  searchForm(searchInfo: any)  
  {  
    
     let firsname= this.Name.value;
     this.employee.firstName=firsname;

    console.log('this.employee.firstName'+firsname);

        this.getData(this.employee);  
      // this.reloadData();
  }  
  get Name()  
  {  
    
   return this.form.get('firstName')!;
   

  } 


  reloadData() {
  // this.employees = this.employeeService.getEmployeesList();
    console.log(this.employees);
  }

  getData(employee: any)  
  {  
    console.log('start getData this.employee.firstName'+this.employee.firstName);
    this.employees = this.employeeService.getEmployeesListByFistName(this.employee.firstName);
    console.log('end getData this.employee.firstName'+this.employee.firstName);

    this.checkSize();

  }  

  checkSize()
  {
if(this.employees!==null){
  return true;
}else{
  return false;
}

 

  }

  add(){

    this.router.navigate(['add']);
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
}