import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpaces(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (value && value.includes(' ')) {
    return { noSpaces: true };
  }
  return null;
}
