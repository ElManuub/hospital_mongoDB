import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogingService {

  private API_REST: string = 'http://localhost:8000/api';
  private tokenKey: string = 'authToken';
  private tipo_empleado : string = ''

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.API_REST}/login`, { email, password }).pipe(
      tap(res => {
        if (res.token) {
          console.log(res.token);
          this.setToken(res.token); // Guardamos el token correctamente en localStorage
          this.setemploye(res.employee.employee_type)
          localStorage.setItem('user', JSON.stringify(res.employee));
        }
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token); // Guardamos el token en localStorage
  }

  private setemploye(type: string): void {
    localStorage.setItem(this.tipo_empleado, type); // Guardamos el token en localStorage
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey); // Obtenemos el token de localStorage
  }

  private getEmployee(): string | null {
    return localStorage.getItem(this.tipo_empleado); // Obtenemos el  de localStorage
  }

  isAuthenticate(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decodificar la parte central del JWT
      const exp = payload.exp * 1000; // Convertir la fecha de expiración a milisegundos
      return Date.now() < exp; // Verificar si el token sigue siendo válido
    } catch (e) {
      return false;
    }
  }

  isSuper(): boolean {
    const employee_type = this.getEmployee()
    if (employee_type === 'administrador') {
      return true;
    }

    return false
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Eliminar el token del localStorage
    localStorage.removeItem('user')
    this.router.navigate(['/login']); // Redirigir al login
  }
}
