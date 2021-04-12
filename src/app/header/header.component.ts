import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../service/authetication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public sessionStorage = sessionStorage;
  constructor(public loginService:AutheticationService,private router: Router) { }

  ngOnInit(): void {
  }

  add(){

    this.router.navigate(['add']);
  }

}
