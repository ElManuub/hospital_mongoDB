import { Injectable } from '@angular/core';
import { Employees } from '../../models/employees';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  
  private REST_API = 'url de api';
  private http: HttpClient;

  private headers = new HttpHeaders().set('Content-type', 'Application/json');

  constructor(http: HttpClient) { 
    this.http = http;
  }

  listar(): Observable<Employees[]>{ 
    console.log("listar funcionando");
    return this.http.get<Employees[]>(this.REST_API).pipe(
      catchError( error => {
        console.error('Error al consultar datos:', error); 
        return throwError(() => new Error('Hubo un error al consultar empleados. Intenta mas tarde.'));
      })
    )
  }

  createEmployee(employee : Employees, imagen: File): Observable<Employees>{

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
    form.append('profile_image', imagen);
    form.append('password', employee.password);
    form.append('status', employee.status)

    return this.http.post<Employees>(this.REST_API, form).pipe(
      catchError(error => {
        console.error('Error en la creación del empleado:', error); 
        return throwError(() => new Error('Hubo un error al crear el empleado. Intenta mas tarde.'));
      })
    );

  }


  editar(employee: Employees, id: string): Observable<Employees>{
    console.log("editar funcionando");
    return this.http.put<Employees>(`${this.REST_API}/${id}`, employee);
  }

  mostrar(id: string):Observable<Employees>{
    console.log("mostrar funcionando");
    return this.http.get<Employees>(this.REST_API + "/" + id);
  }

  borrar(id: string):Observable<Employees>{
    console.log("borrar funcionando");
    return this.http.delete<Employees>(`${this.REST_API}/${id}`);
  }
}
