import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../service/authetication.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  invalidLogin = false;


  constructor(private router:Router,
    private loginService:AutheticationService) { }

  ngOnInit(): void {
    console.log("test");
  }

  checkLogin()
  {
    console.log("test");
if(this.loginService.autheticate(this.user.username,this.user.password))
{
  this.router.navigate(['/insurances']);
  this.invalidLogin = false
} else
 this.invalidLogin = true

}
}