import { Component } from '@angular/core';
import { NavComponent } from "../../../templates/nav/nav.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Products } from '../../../models/products';
import { Categories } from '../../../models/categories';
import { ProductsService } from '../../../services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [NavComponent, CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  errorMessage: String = ''
  errorValidation: String = ''
  photo: File | null = null

  product: Products = {
    id: '',
    name: '',
    category_id: '',
    unit_stock: 0,
    unit_price: 0,
    status: '',
    product_image: ''
  }

  categories: Categories[] = [];

  constructor(private ProducService: ProductsService, private route: Router){}

  seleccionImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.photo = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.product.product_image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  submit(){
    if(this.product.name && this.product.unit_price && this.product.unit_stock){
      this.ProducService.createproducts(this.product, this.photo).subscribe({
        next: (res)=>{
          alert('Pruducto creado con exito!')
          this.route.navigate(['/products/list'])
        },
        error: (error)=>{
          this.errorMessage = error
        }
      })
    } else {
      this.errorValidation = 'Hay campos vacios o incorrectos, favor de verificar.'
      setTimeout(()=>{
        this.errorValidation = ''
      }, 3000)
    }
  }
}
