import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body, { headers });
  }

  logout(): void {
    console.log(`Bearer ${this.getToken()}`);
     this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      next: (response: any) => {
        console.log(response.message); // Mensaje de éxito del backend

        // Eliminar el token del almacenamiento local
        localStorage.removeItem('token');
        
        // Redirigir al login
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error al cerrar sesión:', error);
      }
    });
  }
  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  
}
