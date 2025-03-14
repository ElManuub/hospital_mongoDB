import { Component } from '@angular/core';
import { NavComponent } from "../../templates/nav/nav.component";
import { FooterComponent } from "../../templates/footer/footer.component";

@Component({
  selector: 'app-show',
  imports: [NavComponent, FooterComponent],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

}
