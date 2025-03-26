import { Component } from '@angular/core';
import { NavComponent } from "../../templates/nav/nav.component";
import { FooterComponent } from "../../templates/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-of-sale',
  imports: [NavComponent, FooterComponent, CommonModule],
  templateUrl: './point-of-sale.component.html',
  styleUrl: './point-of-sale.component.css'
})
export class PointOfSaleComponent {

}
