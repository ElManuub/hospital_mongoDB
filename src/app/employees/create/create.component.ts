import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../templates/nav/nav.component";
import { FooterComponent } from "../../templates/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employees } from '../../models/employees';
import { Router } from '@angular/router';
import { EmployeesService } from '../../services/employees/employees.service';

@Component({
  selector: 'app-create',
  imports: [NavComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  photo : File | null = null;  
  password2: string = ''
  formStatus: string = ''
  formStatusMessage: string = ''
  errorMessage: string = ''

  public employee: Employees = {
    _id : '',
    first_name: '',
    last_name: '',
    birth_date: '',
    email: '',
    employee_type: '',
    gender: '',
    hire_date: '',
    profile_image:'',
    notes: '',
    address: '',
    password: '',
    status: ''
  }

  constructor(private route: Router, private employeeService : EmployeesService) { }


  seleccionImagen(evento: any) {
    if (evento.target.files.length > 0) {
      this.photo = evento.target.files[0];
    }
  }
  
  createEmployee() {
    this.employeeService.createEmployee(this.employee, this.photo!).subscribe({
      next: (res) => {
        console.log(res);
        this.route.navigate(['/employees/list']);
      },
      error: (err) => {
        console.error('Error al crear empleado:', err);
        this.errorMessage = err.message || 'Hubo un problema al crear el empleado. Intenta nuevamente.';
      }
    });
  }

    submit() {
    if (this.employee.first_name && this.employee.last_name && this.employee.address && this.employee.email && this.employee.gender){
      //llamamos a la apli
      this.createEmployee()
      this.formStatus = 'Éxito';
      this.formStatusMessage = 'Los datos son validos.';
    } else {
      this.formStatus = 'Faltan datos';
      this.formStatusMessage = 'Por favor, complete todos los campos y asegúrese de que las contraseñas coincidan.';
    }

    if (this.employee.password !== this.password2) {
      this.formStatus = 'Faltan datos';
      this.formStatusMessage = 'Las contraseñas no coincidan.';
    }
  }

}
