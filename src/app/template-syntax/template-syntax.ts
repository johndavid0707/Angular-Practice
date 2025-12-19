import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-syntax',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './template-syntax.html',
  styleUrl: './template-syntax.css',
})
export class TemplateSyntax {
  //Old Way
  isLoggedIn = false;

  items = [
    { id: 1, name: "Apple", available: true },
    { id: 2, name: "Orange", available: false },
    { id: 3, name: "Grapes", available: true }
  ];

  trackById(index: number, item: any): number {
    return item.id;
  }

  user = {
    role: "admin"
  };

  //New way
  users = {
    isLoggedIn: false,
    name: 'John'
  };

  staffs = [
    { id: 1, name: "John", available: true },
    { id: 2, name: "Ganesh", available: false },
    { id: 3, name: "Ram", available: true }
  ];

  user_details = signal({ isLoggedIn: true, name: 'Alice', points: 120 });

  LoggedIn = signal(false);

}
