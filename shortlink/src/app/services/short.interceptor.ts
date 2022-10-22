import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenApi = '33bdce777a9f49693e0b6ba0b7b82abcea4d1850';

    request = request.clone({ setHeaders : {Authorization : 'Bearer '+ tokenApi}});

    return next.handle(request).pipe(catchError((error : HttpErrorResponse)=>{
      console.log(error);
      return throwError(error);
    }));
  }
}
