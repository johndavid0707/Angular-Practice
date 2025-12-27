import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserValidationService {
  reservedNames = ['admin', 'root', 'superuser'];

  isReserved(username: string): boolean {
    return this.reservedNames.includes(username.toLowerCase());
  }
}
