import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-info',
  imports: [RouterLink],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {
  constructor(private router: Router) {}
goBack(){
  this.router.navigate(['/about/content']);
}
}
