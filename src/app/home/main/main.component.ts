import { Component } from '@angular/core';
import { NavComponent } from "../../templates/nav/nav.component";
import { FooterComponent } from "../../templates/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [NavComponent, FooterComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  isSuper: boolean = true;
}
