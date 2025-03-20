import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../templates/nav/nav.component";
import { FooterComponent } from "../../templates/footer/footer.component";
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employees } from '../../models/employees';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../services/employees/employees.service';

@Component({
  selector: 'app-create',
  imports: [NavComponent, FooterComponent, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  employeeForm!: FormGroup;
  id: string = '';
  
  public employee: Employees = {
    _id : '',
    first_name: '',
    last_name: '',
    birth_date: new Date(),
    email: '',
    employee_type: '',
    gender: '',
    hire_date: new Date(),
    notes: '',
    address: '',
    profile_image: '',
    password: '',
    status: ''
  }
  constructor(private fb: FormBuilder, private href: ActivatedRoute, private route: Router, private employeeService : EmployeesService) { }

  ngOnInit(): void {


    this.employeeForm = this.fb.group({
      first_name: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ]],
      last_name: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ]],
      gender: ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2 : ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(1)]],
      postal_code: ['', [Validators.required, Validators.minLength(5)]],
      employee_type: ['', Validators.required],
      birth_date: ['', Validators.required],
      photo: ['']
    },{ validators: this.passwordsMatch })

    this.passwordsMatch(this.employeeForm)
  }

  passwordsMatch(group: FormGroup) {
    const password = group.get('password')?.value;
    const password_confirmation = group.get('password2')?.value;
    return password === password_confirmation ? null : { mismatch: true };
  }


  //obtener los valores del form
  get first_name() {
    return this.employeeForm.get('first_name');
  }
  get last_name() {
    return this.employeeForm.get('last_name');
  }
  get gender() {
    return this.employeeForm.get('gender');
  }
  get email() {
    return this.employeeForm.get('email');
  }

  get password(){
    return this.employeeForm.get('password');
  }

  get birth_date(){
    return this.employeeForm.get('birth_date');
  }

  get address(){
    return this.employeeForm.get('address');
  }
  get postal_code(){
    return this.employeeForm.get('postal_code');
  }
  get employee_type(){
    return this.employeeForm.get('employee_type');
  }

  get password2(){
    return this.employeeForm.get('password2');
  }

  //enviar informacion
  submit(){
    
    this.employeeService.createEmployee(this.employee).subscribe(res => {
      console.log(res);
    })
    }

}
