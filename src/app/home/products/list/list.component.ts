import { Component } from '@angular/core';
import { NavComponent } from '../../../templates/nav/nav.component';
import { FooterComponent } from '../../../templates/footer/footer.component';

@Component({
  selector: 'app-list',
  imports: [NavComponent, FooterComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
