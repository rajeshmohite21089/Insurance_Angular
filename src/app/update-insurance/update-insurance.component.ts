import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance } from '../insurance';
import { InsuranceServiceService } from '../insurance-service.service';

@Component({
  selector: 'app-update-insurance',
  templateUrl: './update-insurance.component.html',
  styleUrls: ['./update-insurance.component.css']
})
export class UpdateInsuranceComponent implements OnInit {

  id!: number | 0;
  insurance: Insurance | any;

  constructor(private route: ActivatedRoute,private router: Router,
    private insuranceService: InsuranceServiceService) { }

  ngOnInit() {
    this.insurance = new Insurance();

    this.id = this.route.snapshot.params['id'];
    
    this.insuranceService.getInsurance(this.id)
      .subscribe(data => {
        console.log(data)
        this.insurance = data;
      }, error => console.log(error));
  }

  updateInsurance() {
    this.insuranceService.updateInsurance(this.id, this.insurance)
      .subscribe(data => {
        console.log(data);
        this.insurance = new Insurance();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateInsurance();    
  }

  gotoList() {
    this.router.navigate(['/insurances']);
  }

}
