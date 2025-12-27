import { inject } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { UserValidationService } from '../../services/authService/userValidation/user-validation-service';

export function reservedNameValidator() {
  const service = inject(UserValidationService);

  return (control: AbstractControl): ValidationErrors | null => {
    return service.isReserved(control.value) ? { reservedName: true } : null;
  };
}
