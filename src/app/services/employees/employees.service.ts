import { Injectable } from '@angular/core';
import { Data, Employees } from '../../models/employees';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  
  private REST_API = 'http://localhost:8000/api/';
  private http: HttpClient;

  private headers = new HttpHeaders().set('Content-type', 'Application/json');

  constructor(http: HttpClient) { 
    this.http = http;
  }

  listar(): Observable<Data>{ 
    console.log("listar funcionando");
    return this.http.get<Data>(this.REST_API+"empleado/lista").pipe(
      catchError( error => {
        console.error('Error al consultar datos:', error); 
        return throwError(() => new Error('Hubo un error al consultar empleados. Intenta mas tarde.'));
      })
    )
  }

  createEmployee(employee : Employees, imagen: any): Observable<Employees>{

    const form = new FormData();
    form.append('first_name', employee.first_name);
    form.append('last_name', employee.last_name);
    form.append('birth_date', employee.birth_date);
    form.append('email', employee.email);
    form.append('employee_type', employee.employee_type);
    form.append('gender', employee.gender);
    form.append('hire_date', employee.hire_date);
    form.append('notes', employee.notes);
    form.append('address', employee.address);
    if (imagen) {
      form.append('profile_image', imagen);
    }
    form.append('password', employee.password);
    form.append('status', employee.status)

console.log(...form.entries())
    return this.http.post<Employees>(`${this.REST_API}empleado/registrar`, form).pipe(
      catchError(error => {
        console.error('Error en la creación del empleado:', error.errors); 
        return throwError(() => new Error('Hubo un error al crear el empleado. Intenta mas tarde.'));
      })
    );

  }


  editar(employee: Employees, imagen: any, id: string): Observable<Employees>{
    console.log("editar funcionando");

    const form = new FormData();
    form.append('first_name', employee.first_name);
    form.append('last_name', employee.last_name);
    form.append('birth_date', employee.birth_date);
    form.append('email', employee.email);
    form.append('employee_type', employee.employee_type);
    form.append('gender', employee.gender);
    form.append('hire_date', employee.hire_date);
    form.append('notes', employee.notes);
    form.append('address', employee.address);
    if (imagen) {
      form.append('profile_image', imagen);
    }
    form.append('password', employee.password || '');
    form.append('status', employee.status)
    form.append('_method', 'put');

    console.log(form)
    return this.http.post<Employees>(`${this.REST_API}empleado/editar/${id}`, form).pipe(
      catchError(error => {
        console.error('Error en la creación del empleado:', error); 
        return throwError(() => new Error('Hubo un error al crear el empleado. Intenta mas tarde.'));
      })
    );
  }

  mostrar(id: string):Observable<Data>{
    console.log("mostrar funcionando");
    return this.http.get<Data>(this.REST_API + "empleado/mostrar/" + id).pipe(
      catchError(error => {
        console.error('Error eal mostrar:', error); 
        return throwError(() => new Error('Hubo un error al mostrar el empleado. Intenta mas tarde.'));
      })
    )
  }

  borrar(id: string):Observable<Employees>{
    console.log("borrar funcionando");
    return this.http.delete<Employees>(`${this.REST_API}/${id}`);
  }
}
