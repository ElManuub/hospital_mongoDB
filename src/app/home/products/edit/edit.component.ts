import { Component } from '@angular/core';
import { NavComponent } from "../../../templates/nav/nav.component";
import { FooterComponent } from "../../../templates/footer/footer.component";

@Component({
  selector: 'app-edit',
  imports: [NavComponent, FooterComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

}
