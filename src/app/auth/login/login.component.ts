import { Component } from '@angular/core';
import  { CookieService }  from  'ngx-cookie-service' ;
import { LogingService } from '../../services/login/loging.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''
  password: string = ''
  
  constructor(private auth: LogingService, private router: Router){}

  loggear(){
    console.log(this.email, this.password)
    this.auth.login(this.email, this.password).subscribe({
      next: (res)=>{
        console.log(res)
        this.router.navigate(['/'])
      },
      error: (err)=>{
        console.error(err)
      }
    })
  }
}
