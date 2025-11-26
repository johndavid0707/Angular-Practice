import { Component } from '@angular/core';
import { AuthsService } from '../../services/authService/canMatch/auths-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
 constructor(private auth: AuthsService, private router: Router) {}

  login(role: string) {
    this.auth.login(role);
    this.router.navigate(['/admin']);
  }
}
