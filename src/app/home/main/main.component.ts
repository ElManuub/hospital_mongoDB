import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../templates/nav/nav.component";
import { FooterComponent } from "../../templates/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [NavComponent, FooterComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent  implements OnInit{
  user: boolean = false;

  storedUser: any = JSON.parse(localStorage.getItem('user') || '{}');
  isAdmin = this.storedUser.employee_type

  ngOnInit(): void {
    if(this.isAdmin === 'administrador'){
      this.user = true
    }
  }

  
}
