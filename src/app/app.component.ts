import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto_Holala';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title); // <-- Aquí se actualiza el título del documento
  }
}
