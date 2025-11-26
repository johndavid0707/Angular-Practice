import { CanActivateFn } from '@angular/router';

export const blockGuard: CanActivateFn = () => {
  console.log("Guard triggered — blocking route");
  return false; // Block navigation
};
