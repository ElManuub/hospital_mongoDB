import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../../templates/nav/nav.component";
import { Categories } from '../../../models/categories';
import { CategoriesService } from '../../../services/categories/categories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [NavComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

    categories: Categories[] = []; 
    errorMessage: string = ''
  
    constructor(private category: CategoriesService) {}
    
  
    ngOnInit(): void {
      
      this.category.listar().subscribe({
        next: (res) => {
          console.log(res);
          this.categories = res
        },
        error: (err) => {
          console.error('Error al listar empleados:', err);
          this.errorMessage = err.message || 'Hubo un problema al listar empleados. Intenta mas tarde.';
        }
      })
     }
}
