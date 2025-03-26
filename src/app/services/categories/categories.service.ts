import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../../models/categories';
import { catchError, Observable, throwError } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

      private REST_API = 'http://localhost:8000/api';
      private http: HttpClient;
    
      private headers = new HttpHeaders().set('Content-type', 'Application/json');
    
      constructor(http: HttpClient) { 
        this.http = http;
      }
    
      listar(): Observable<Categories[]>{ 
        console.log("listar funcionando");
        return this.http.get<Categories[]>(this.REST_API+"/categoria/lista").pipe(
                catchError( error => {
                  console.error('Error al consultar datos:', error); 
                  return throwError(() => new Error('Hubo un error al consultar categorias. Intenta mas tarde.'));
                })
        )
      }
    
      createCategories(categories : Categories, image : File): Observable<Categories>{
        const form = new FormData();
        form.append('name', categories.name)
        form.append('description', categories.description)
        form.append('category_image', image)

        return this.http.post<Categories>(this.REST_API+"/categoria/registrar", form).pipe(
          catchError(error => {
            console.error('Error al crear datos:', error); 
            return throwError(() => new Error('Hubo un error al crear categoria. Intenta mas tarde.'));
          })
        )
      }
    
    
      editar(categories:Categories, id: string): Observable<Categories>{
        console.log("editar funcionando");
        return this.http.put<Categories>(`${this.REST_API}/categoria/actualizar/${id}`, categories);
      }
    
      mostrar(id: string):Observable<Categories>{
        console.log("mostrar funcionando");
        return this.http.get<Categories>(this.REST_API + "/" + id);
      }
    
      borrar(id: string):Observable<Categories>{
        console.log("borrar funcionando");
        return this.http.delete<Categories>(`${this.REST_API}/${id}`);
      }
}
