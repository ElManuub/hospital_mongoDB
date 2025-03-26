import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../../templates/nav/nav.component';
import { FooterComponent } from '../../../templates/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Products } from '../../../models/products';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-list',
  imports: [NavComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  products : Products[] = [];
  errorMessage: string = ''

  constructor(private productService : ProductsService){}

  ngOnInit(): void {
    this.productService.listar().subscribe({
      next:(value) => {
        console.log(value)
        this.products = value
      },
      error:(err) => {
        console.log(err)
        this.errorMessage = err.message || 'Hubo un problema al listar productos. Intenta mas tarde.';
      },
    })
  }


}
