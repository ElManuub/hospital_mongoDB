import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../../models/products';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private REST_API = 'http://localhost:8000/api';
    private http: HttpClient;
  
    private headers = new HttpHeaders().set('Content-type', 'Application/json');
  
    constructor(http: HttpClient) { 
      this.http = http;
    }
  
    listar(): Observable<Products[]>{ 
      console.log("listar funcionando");
      return this.http.get<Products[]>(this.REST_API).pipe(
        catchError(err =>{
          console.error("error al listar:" + err)
          return throwError(() => new Error('Hubo un error al consultar productos. Intenta mas tarde.'));
        })
      )
    }
  
    createproducts(products : Products, image: File): Observable<Products>{

      const productsForm = new FormData()
      productsForm.append('name', products.name)
      productsForm.append('category_id', products.category_id)
      productsForm.append('unit_stock', products.unit_stock.toString())
      productsForm.append('unit_price', products.unit_price.toLocaleString())
      productsForm.append('product_image', image)

      return this.http.post<Products>(this.REST_API, products, { headers: this.headers}).pipe(
        catchError(err =>{
          console.error('error de conexion con api: ' + err)
          return throwError(()=> new Error('Hubo un error al crear nuevo producto, intenta mas tarde.'))
        })
      )
    }
  
  
    editar(products:Products, id: string): Observable<Products>{
      console.log("editar funcionando");
      return this.http.put<Products>(`${this.REST_API}/${id}`, products);
    }
  
    mostrar(id: string):Observable<Products>{
      console.log("mostrar funcionando");
      return this.http.get<Products>(this.REST_API + "/" + id);
    }
  
    borrar(id: string):Observable<Products>{
      console.log("borrar funcionando");
      return this.http.delete<Products>(`${this.REST_API}/${id}`);
    }
}
