import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../templates/nav/nav.component";
import { FooterComponent } from "../../templates/footer/footer.component";
import { Employees } from '../../models/employees';
import { EmployeesService } from '../../services/employees/employees.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  employees: Employees[] = []; 
  errorMessage: string = ''

  constructor(private employeeService: EmployeesService) {}
  

  ngOnInit(): void {
    
    this.employeeService.listar().subscribe({
      next: (res) => {
        console.log(res);
        this.employees = res
      },
      error: (err) => {
        console.error('Error al listar empleados:', err);
        this.errorMessage = err.message || 'Hubo un problema al listar empleados. Intenta mas tarde.';
      }
    })
  }



}

