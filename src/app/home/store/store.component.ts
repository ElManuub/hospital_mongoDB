import { Component } from '@angular/core';
import { NavComponent } from "../../templates/nav/nav.component";
import { FooterComponent } from "../../templates/footer/footer.component";

@Component({
  selector: 'app-store',
  imports: [NavComponent, FooterComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
