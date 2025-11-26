import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  // Check user login
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); 
  }

  // Login (just example)
  login() {
    localStorage.setItem('token', '123456');
  
  }

  // Logout
  logout() {
    localStorage.removeItem('token');
  }
}
