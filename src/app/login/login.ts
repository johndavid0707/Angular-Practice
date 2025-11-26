import { Component } from '@angular/core';
import { AuthService } from '../../services/authService/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
constructor(private auth: AuthService, private router: Router) {}

  doLogin() {
    this.auth.login();     // Saves token
    this.router.navigate(['/welcome']); 
    console.log('User logged in, navigating to welcome page');
  }

goBack(){
  this.router.navigate(['/']);
}
}
