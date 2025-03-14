import { Component } from '@angular/core';
import { NavComponent } from "../../templates/nav/nav.component";
import { FooterComponent } from "../../templates/footer/footer.component";

@Component({
  selector: 'app-point-of-sale',
  imports: [NavComponent, FooterComponent],
  templateUrl: './point-of-sale.component.html',
  styleUrl: './point-of-sale.component.css'
})
export class PointOfSaleComponent {

}
