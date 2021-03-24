import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../service/authetication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authentocationService: AutheticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.authentocationService.logOut();
    this.router.navigate(['login']);
  }

}
