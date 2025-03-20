import { Injectable } from '@angular/core';
import { Employees } from '../../models/employees';
import { Observable } from 'rxjs';
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
    return this.http.get<Employees[]>(this.REST_API);
  }

  createEmployee(employee : Employees): Observable<Employees>{
    return this.http.post<Employees>(this.REST_API, employee)
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
