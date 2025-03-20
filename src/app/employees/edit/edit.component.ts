import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees/employees.service';
import { Employees } from '../../models/employees';
import { NavComponent } from '../../templates/nav/nav.component';
import { FooterComponent } from '../../templates/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  imports: [NavComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  employeeForm!: FormGroup;
  employee!: Employees;  // Un solo objeto en lugar de un array

  constructor(
    private fb: FormBuilder,
    private href: ActivatedRoute,
    private route: Router,
    private employeeService: EmployeesService
  ) { }

  ngOnInit(): void {
    // Inicializamos el formulario
    this.employeeForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      gender: [''],
      email: [''],
      password: [''],
      password2: [''],
      birth_date: [''],
      address: [''],
      photo: [''],
      notes: [''],
      employee_type: [''] 
    });

    // Obtener el ID desde la URL y cargar datos
    this.href.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.employeeService.mostrar(id).subscribe(res => {
          this.employee = res;

          // Llenar el formulario con los datos recibidos
          this.employeeForm.patchValue({
            first_name: this.employee.first_name,
            last_name: this.employee.last_name,
            gender: this.employee.gender,
            email: this.employee.email,
            birth_date: this.employee.birth_date,
            address: this.employee.address,
            notes: this.employee.notes,
            employee_type: this.employee.employee_type
          });
        });
      }
    });
  }
}
