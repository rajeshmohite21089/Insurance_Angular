import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../service/authetication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public sessionStorage = sessionStorage;
  constructor(public loginService:AutheticationService) { }

  ngOnInit(): void {
  }

}
