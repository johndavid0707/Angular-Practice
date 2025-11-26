import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/authService/resolver/user-service';


export const userResolver: ResolveFn<any> = () => {
  const userService = inject(UserService);
  return userService.getUserProfile(); // returns Observable
};
