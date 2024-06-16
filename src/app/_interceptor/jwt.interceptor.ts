import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NavigationExtras, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Injectable()
export class jwtInterceptor implements HttpInterceptor {
  constructor(private accountService:AccountService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next:user=>{
        if(user){
          req=req.clone({
            setHeaders:{
              Authorization:`Bearer ${user.token}`
            }
          })
        }
      }
    })
    return next.handle(req)
  }
};
