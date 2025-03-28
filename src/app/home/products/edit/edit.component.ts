import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../../templates/nav/nav.component";
import { FooterComponent } from "../../../templates/footer/footer.component";
import { Products } from '../../../models/products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [NavComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  product: Products = {
    id: '',
    name: '',
    category_id: '',
    unit_stock: 0,
    unit_price: 0,
    status: '',
    product_image: ''
  };

  categories = [ /* Array de categorías */ ];
  id: string = '';
  photo: File | null = null;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      if (this.id) {
        this.productsService.mostrar(this.id).subscribe(res => {
          if (res.data) {
            this.product = res.data;
          }
        });
      }
    });
  }

  onSubmit() {
    if (!this.product.name  || this.product.unit_stock < 0 || this.product.unit_price < 0) {
      console.error('Faltan datos o los valores no son válidos.');
      return;
    }

    this.productsService.editar(this.product, this.photo, this.id).subscribe({
      next: () => {
        this.router.navigate(['/products/list']);
      },
      error: (error) => {
        console.error('Error al editar el producto:', error);
      }
    });
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.photo = file;
      this.product.product_image = URL.createObjectURL(file); // Solo vista previa
    }
  }
}
