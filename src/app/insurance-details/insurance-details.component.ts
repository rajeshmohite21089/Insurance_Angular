import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance } from '../insurance';
import { InsuranceServiceService } from '../insurance-service.service';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.css']
})
export class InsuranceDetailsComponent implements OnInit {

  id!: number | 0;
  insurance: Insurance | undefined;

 constructor(private route: ActivatedRoute,private router: Router,
  private insuranceService: InsuranceServiceService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.insuranceService.getInsurance(this.id)
    .subscribe(data => {
      console.log(data)
      this.insurance = data;
    }, error => console.log(error));
}
list(){
  this.router.navigate(['insurances']);
}

}
