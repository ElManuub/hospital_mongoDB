import { Component } from '@angular/core';
import { NavComponent } from "../templates/nav/nav.component";
import { FooterComponent } from "../templates/footer/footer.component";

@Component({
  selector: 'app-profile',
  imports: [NavComponent, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
