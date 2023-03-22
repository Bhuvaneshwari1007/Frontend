import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{

  constructor(private authservice:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = this.authservice.getToken();
    if (token){
      req=req.clone({
        setHeaders:{
          'Content-Type':'application/json; charset=utf-8',
          Accept: 'application/json',
          Authorization:`Bearer ${token}`
        }
      });
    }
      else{
        req=req.clone({
          setHeaders:{
            'Content-Type':'application/json; charset=utf-8',
            Accept: 'application/json'
          }
        });
    }
    return next.handle(req);
  }
}

