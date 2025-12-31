import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'validationError'
})
export class ValidationErrorPipe implements PipeTransform {

 transform(control: AbstractControl | null): string {
  if (!control || !control.errors || !(control.touched || control.dirty)) {
    return '';
  }

  if (control.hasError('required')) {
    return 'This field is required';
  }

  if (control.hasError('email')) {
    return 'Invalid email address';
  }

  if (control.hasError('minlength')) {
    const error = control.getError('minlength');
    return `Minimum length is ${error.requiredLength}`;
  }

  return 'Invalid field';
}


}
