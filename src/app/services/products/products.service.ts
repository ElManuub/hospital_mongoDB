import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../../models/products';
import { catchError, Observable, throwError } from 'rxjs';
import { Data } from '../../models/employees';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private REST_API = 'http://localhost:8000/api/producto';
    private http: HttpClient;
  
    private headers = new HttpHeaders().set('Content-type', 'Application/json');
  
    constructor(http: HttpClient) { 
      this.http = http;
    }
  
    listar(): Observable<Data>{ 
      console.log("listar funcionando");
      return this.http.get<Data>(`${this.REST_API}/lista`).pipe(
        catchError(err =>{
          console.error("error al listar:" + err)
          return throwError(() => new Error('Hubo un error al consultar productos. Intenta mas tarde.'));
        })
      )
    }
  
    createproducts(products : Products, image: any): Observable<Products>{

      const productsForm = new FormData()
      productsForm.append('name', products.name)
      productsForm.append('category_id', products.category_id)
      productsForm.append('unit_stock', products.unit_stock.toString())
      productsForm.append('unit_price', products.unit_price.toLocaleString())
      if(image){
        productsForm.append('product_image', image)
      }
      

      return this.http.post<Products>(`${this.REST_API}/registrar`, productsForm).pipe(
        catchError(err =>{
          console.error('error de conexion con api: ' + err)
          return throwError(()=> new Error('Hubo un error al crear nuevo producto, intenta mas tarde.'))
        })
      )
    }
  
  
    editar(products:any, imagen: any, id: string): Observable<Products>{
      console.log("editar funcionando");

      console.log("form desde servicio: " + products)

      const productsForm = new FormData()
      productsForm.append('name', products.name)
      productsForm.append('category_id', products.category_id)
      productsForm.append('unit_stock', products.unit_stock.toString())
      productsForm.append('unit_price', products.unit_price.toLocaleString())
      if (imagen) {
        productsForm.append('product_image', imagen);
      }
      productsForm.append('_method', 'put');

      console.log(...productsForm.entries())

      return this.http.post<Products>(`${this.REST_API}/actualizar/${id}`, productsForm).pipe(
        catchError(err =>{
          console.error('error de conexion con api: ' + err)
          return throwError(()=> new Error('Hubo un error al editar el producto, intenta mas tarde.'))
        })
      )
    }
  
    mostrar(id: string):Observable<Data>{
      console.log("mostrar funcionando");
      return this.http.get<Data>(this.REST_API + "/mostrar/" + id);
    }
  
    borrar(id: string):Observable<Products>{
      console.log("borrar funcionando");
      return this.http.delete<Products>(`${this.REST_API}/${id}`);
    }
}
