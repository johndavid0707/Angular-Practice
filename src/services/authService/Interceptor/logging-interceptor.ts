import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log('Outgoing request to:', req.url);
  // const started = Date.now();

  // return next(req).pipe(
  //   tap(event => {
  //     if (event.type === 4) { // HttpResponse
  //       const elapsed = Date.now() - started;
  //       console.log(`Request for ${req.url} took ${elapsed} ms.`);
  //     }
  //   })
  // );


  
  // Example: Functional Auth Interceptor

  //   const token = localStorage.getItem('access_token');

  // if (token) {
  //   const authReq = req.clone({
  //     setHeaders: { Authorization: `Bearer ${token}` }
  //   });
  //   return next(authReq);
  // }

  // return next(req);



  //Example: Functional Logging Interceptor

  const started = Date.now();
  console.log(`[HTTP] ${req.method} ${req.urlWithParams} started...`);

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        const elapsed = Date.now() - started;
        console.log(`[HTTP] ${req.method} ${req.urlWithParams} completed in ${elapsed} ms`);
      }
    })
  );



};
