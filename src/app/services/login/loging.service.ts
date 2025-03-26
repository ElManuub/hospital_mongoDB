import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from '../../models/employees';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogingService {

   private API_REST: String = 'http://localhost:8000/api'
   private tokenKey: string = 'authToken'

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string):Observable<any>{
    return this.http.post<any>(`${this.API_REST}/login`, {email, password}).pipe(
      tap(res =>{
        if(res.token){
          console.log(res.token)
          this.tokenKey = res.token 
        }
      })
    )
  }

  private setToken(token : string): void {
    localStorage.setItem(this.tokenKey, token)
  }

  private getToken(): String | null {
    return localStorage.getItem(this.tokenKey)
  }

  isAuthenticate(): boolean{
    const token = this.getToken()
    if(!token){
      return false
    }
    const payload = JSON.parse(atob(token.split('.')[0]))
    const exp = payload.exp * 1000
    return Date.now() < exp
  }

  logout(){
    localStorage.removeItem(this.tokenKey)
    this.router.navigate(['/login'])
  }
}
