import { CommonModule, JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, JsonPipe],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {

  users = httpResource(
    () => `https://jsonplaceholder.typicode.com/users`,
    {
      defaultValue: []
    }
  );

}
