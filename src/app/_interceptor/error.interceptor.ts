import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NavigationExtras, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err :HttpErrorResponse) => {
        if(err){
          switch(err.status){
            case 400:
              this.toastr.error("400 error")
              break;
              case 401:
                this.toastr.error("401 Un authorizes", err.error)
                break;
                case 404:
                  this.router.navigateByUrl('/not-found')
                  break;
                case 500:
                  // Inside your component
                  const navigationExtras: NavigationExtras = {
                    state: { error: err.error?.message }
                  };
                    this.router.navigateByUrl('/server-error', navigationExtras)
                  break;
                default:
                  this.toastr.error("something unexcepted wrong")
                  break;

          }
        }
        throw err;
       
      })
    );
  }
}