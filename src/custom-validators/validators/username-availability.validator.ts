import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function usernameAvailability(control: AbstractControl): Observable<ValidationErrors | null> {
  const forbiddenNames = ['admin', 'root', 'superuser', 'admin'];
  return of(control.value).pipe(
    delay(800), // simulate API delay
    map(value => forbiddenNames.includes(value) ? { usernameTaken: true } : null)
  );
}
