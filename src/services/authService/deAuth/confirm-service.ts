import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  confirm(message: string): boolean {
    return confirm(message);  // Browser confirm popup
  }
}
