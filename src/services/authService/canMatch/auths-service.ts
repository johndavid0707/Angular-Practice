import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthsService {
    // Example: login saves token and role
  login(role: string) {
    localStorage.setItem('token', '123'); // example token
    localStorage.setItem('role', role);   // 'admin' or 'user'
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  userRole(): string | null {
    return localStorage.getItem('role');  // returns 'admin' or 'user'
  }
}
