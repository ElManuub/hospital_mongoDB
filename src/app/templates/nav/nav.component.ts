import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { LogingService } from '../../services/login/loging.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  imports: [FormsModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  user: boolean = true;
  user2: string = 'super';


  constructor(private auth: LogingService, private router: Router) { }

  logout() {
    this.auth.logout()
  }
}
