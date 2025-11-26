import { CanDeactivateFn } from '@angular/router';
import { ConfirmService } from '../../../services/authService/deAuth/confirm-service';
import { inject } from '@angular/core';

export const deauthGuard: CanDeactivateFn<any> = (component) => {
  if (component.hasUnsavedChanges()) {
    return inject(ConfirmService).confirm('Discard changes?');
  }
  return true;
};
