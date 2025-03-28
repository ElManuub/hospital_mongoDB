import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees/employees.service';
import { Employees } from '../../models/employees';
import { NavComponent } from '../../templates/nav/nav.component';
import { FooterComponent } from '../../templates/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone:true,
  imports: [NavComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

   id : string = ''
   photo: File | null = null
   password2: string = ''

  employee: Employees = {
    id: '',
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: '',
    birth_date: '',
    hire_date: '',
    profile_image: '',
    address: '',
    notes: '',
    employee_type: '',
    status: ''
  };

  constructor(
    private href: ActivatedRoute,
    private route: Router,
    private employeeService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.href.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      if (this.id) {
        this.employeeService.mostrar(this.id).subscribe({
          next: (res)=>{
            console.log(res)
            this.employee = res.data
            console.log(this.employee)
          },
          error: ()=>{

          }
        });
      }
    });
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.photo = file 
      const reader = new FileReader();
      reader.onload = () => {
        this.employee.profile_image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  

  submit(){
    this.employee.password = this.password2
    this.employeeService.editar(this.employee, this.photo, this.id).subscribe({
      next: (res)=>{
        console.log(res)
        this.route.navigate(['/employees/list'])
      },
      error: (error)=>{
        console.log("error en respuesta:",error)
        console.log(this.employee)
      }
    })
  }
  
}