import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  // Simulate API call (can replace with HttpClient)
  getUserProfile() {
    const userData = {
      name: 'John David',
      email: 'john@gmail.com',
      role: 'Developer'
    };

    // Simulate 1-second delay like real API
    return of(userData).pipe(delay(1000));
  }
}
