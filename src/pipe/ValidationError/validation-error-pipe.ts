import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATION_MESSAGES: { [key: string]: (error: any) => string } = {
  required: () => 'This field is required',
  minlength: (error) => `Minimum length is ${error.requiredLength}`,
  maxlength: (error) => `Maximum length is ${error.requiredLength}`,
  pattern: () => 'Invalid format',
  email: () => 'Invalid email address',
};

@Pipe({
  name: 'validationError'
})
export class ValidationErrorPipe implements PipeTransform {

transform(control: AbstractControl | null): string {
    if (!control || !control.errors || !control.touched) return '';

    const firstErrorKey = Object.keys(control.errors)[0];
    const errorValue = control.errors[firstErrorKey];

    const messageFn = VALIDATION_MESSAGES[firstErrorKey];
    return messageFn ? messageFn(errorValue) : 'Invalid field';
  }

}
