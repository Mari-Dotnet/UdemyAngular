import { HttpInterceptorFn } from '@angular/common/http';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, delay, finalize, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { BusyService } from '../_services/busy.service';

@Injectable()
export class loadingInterceptor implements HttpInterceptor {
 
  constructor(private busyService:BusyService) {
    
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.busyService.busy();
    return next.handle(req).pipe(
      delay(1000),
      finalize(()=>{
        this.busyService.idele();
      })
    )
  }

};
