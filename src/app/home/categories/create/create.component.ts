import { Component } from '@angular/core';
import { NavComponent } from "../../../templates/nav/nav.component";
import { FooterComponent } from "../../../templates/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { Categories } from '../../../models/categories';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../../../services/categories/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [NavComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  image: File | null = null
  errorMessage: string = ''
  errorValidacion: string = ''

  category: Categories = {
    _id: '',
    name: '',
    description: '',
    category_image: ''
  }

  constructor(private categories: CategoriesService, private route: Router) { }

  submit() {
    if (this.category.name && this.category.description) {
      this.crearCategoria()
    } else {
      this.errorValidacion = 'datos incorrectos o no validos!'
      setTimeout(() => {
        this.errorValidacion = ''
      }, 2000)

    }

  }

  crearCategoria() {
    this.categories.createCategories(this.category, this.image!).subscribe({
      next: (res) => {
        console.log(res);
        this.route.navigate(['/categories/list'])
      },
      error: (err) => {
        console.error('Error al crear categoria:', err);
        this.errorMessage = err.message || 'Hubo un problema al crear la categoria. Intenta nuevamente o mas tarde.';
      }
    })
  }

  seleccionImagen(event: any) {
    this.image = event.target.files[0]
  }


}
