import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customers } from '../../models/customers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

      private REST_API = 'url de api';
      private http: HttpClient;
    
      private headers = new HttpHeaders().set('Content-type', 'Application/json');
    
      constructor(http: HttpClient) { 
        this.http = http;
      }
    
      listar(): Observable<Customers[]>{ 
        console.log("listar funcionando");
        return this.http.get<Customers[]>(this.REST_API);
      }
    
      createCustomers(customers : Customers): Observable<Customers>{
        return this.http.post<Customers>(this.REST_API, customers)
      }
    
    
      editar(customers:Customers, id: string): Observable<Customers>{
        console.log("editar funcionando");
        return this.http.put<Customers>(`${this.REST_API}/${id}`, customers);
      }
    
      mostrar(id: string):Observable<Customers>{
        console.log("mostrar funcionando");
        return this.http.get<Customers>(this.REST_API + "/" + id);
      }
    
      borrar(id: string):Observable<Customers>{
        console.log("borrar funcionando");
        return this.http.delete<Customers>(`${this.REST_API}/${id}`);
      }
}
