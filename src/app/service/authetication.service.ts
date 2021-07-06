import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  
  user: User | any;
  authority:any;

  
  private baseUrl = 'http://localhost:8081/Insurance/login';
  constructor(private http: HttpClient) { }

 /* autheticate(username: String, password: String) {


    const headers = new HttpHeaders( {
      authorization : 'Basic Auth' + (username + ':' + password) } );
console.log('headers'+headers);
console.log('username'+username);
console.log('password'+username + ':' + password);

  this.http.post(this.baseUrl, {headers: headers}).subscribe(response => {
    if (response==null) {

      console.log(response);
        return true;
    } else {
        return false;
    }
    
});

return true;
  }
*/

public autheticates(username: string,password: any) {
  return this.http.post<string>("http://localhost:9191/authenticate", {username, password}, {  responseType: 'text' as 'json' });
}
  
autheticate(username: string,password: any){

  console.log("username"+username);
  console.log("password"+password);
  var formData: any = new FormData();
  formData.append("username", "nilesh");
  formData.append("password", "nilesh");
 //headers.get('Authorization') === `Basic ${window.btoa('test:test')}`
 let headers = new Headers({'Content-Type': 'application/json'});

  this.http.post<String>(this.baseUrl, {username, password},{responseType: 'text' as 'json'})
  .subscribe(data => {
    console.log(data)
   // console.log("data"+JSON.parse(data));
    //const token = data.headers.get('token');
    //const userId = data.headers.get('userId');

  var data=data;
   console.log("token"+data.split(':')[1]);


  this.authority=data.split(':')[2];

   this.checkAuthority(this.authority);
   
   sessionStorage.setItem('username',username);
   sessionStorage.setItem('userId',data.split(':')[0]);


    sessionStorage.setItem('token',data.split(':')[1]);
    }, error => console.log(error));
    let user=sessionStorage.getItem("username");
    console.log("user-seesion"+user);
if(user==null){
  return false;
}else{
  return true;
}
 
}

checkAuthority(authority:any)
{
  if(this.authority.includes('CREATOR')){

    sessionStorage.setItem('CREATOR',"true");

   }
   if(this.authority.includes('EDITOR')){

    sessionStorage.setItem('EDITOR',"true");

   }
   if(this.authority.includes('USER')){

    sessionStorage.setItem('USER',"true");

   }
   if(this.authority.includes('ADMIN')){

    sessionStorage.setItem('ADMIN',"true");

   }

}
isLoggedInCreator()
{

  let creator=sessionStorage.getItem('CREATOR');

  return !(creator===null);


}

isLogggedInEditor()
{
  let editor=sessionStorage.getItem('EDITOR');

  return !(editor===null);

}

isLoggedInUser()
{
  let user=sessionStorage.getItem('USER');
  return !(user===null);
}

isUserLoggedIn()
{
  let user=sessionStorage.getItem('username');
 
  return !(user===null);
}
isLoggedInAdmin()
{

  let admin=sessionStorage.getItem('ADMIN');
  console.log("admin"+admin);
  return !(admin===null);
}

logOut()
{

  sessionStorage.removeItem('username');
  sessionStorage.removeItem('USER');
  sessionStorage.removeItem('EDITOR');
  sessionStorage.removeItem('CREATOR');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('ADMIN');
}

}
