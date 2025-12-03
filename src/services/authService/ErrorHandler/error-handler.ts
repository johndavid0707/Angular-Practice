import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandler {

  //Centralized Error Handling Service

  handleError(error: HttpErrorResponse) {
    let msg = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      msg = `Client Error: ${error.error.message}`;
    } else {
      msg = `Server Error: ${error.status} - ${error.message}`;
    }
    console.error(msg);
    return throwError(() => new Error(msg));
  }

  
}
