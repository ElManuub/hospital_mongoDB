import { Component } from '@angular/core';
import  { CookieService }  from  'ngx-cookie-service' ;

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  token : string = '';
  constructor(private cookie: CookieService){}

  loggear(){
   //guardar el token
     this.cookie.set('token', 'valor');
     //obtener token
     this.token = this.cookie.get('token');
  }
}
