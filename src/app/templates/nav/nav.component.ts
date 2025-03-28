import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { LogingService } from '../../services/login/loging.service';
import { Router } from '@angular/router';
import { Employees } from '../../models/employees';
@Component({
  selector: 'app-nav',
  imports: [FormsModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  user: boolean = false;

   storedUser: any = JSON.parse(localStorage.getItem('user') || '{}');
   isAdmin = this.storedUser.employee_type

  constructor(private auth: LogingService, private router: Router) { }

  ngOnInit(): void {
    if(this.isAdmin === 'administrador'){
      this.user == true
    }
    console.log(this.storedUser)
  }

  logout() {
    this.auth.logout()
  }
}
