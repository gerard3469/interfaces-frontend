import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local

    // Clonar la solicitud y agregar el header Authorization si el token está presente
    if (token && !req.url.includes('/login')) { // Evitar agregar el token en la solicitud de login
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(clonedReq);
    }

    // Si no hay token o es la solicitud de login, pasar la solicitud sin modificar
    return next.handle(req);
  }
}
