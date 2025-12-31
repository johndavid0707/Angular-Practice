import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-errors',
  imports: [CommonModule],
  templateUrl: './form-errors.html',
  styleUrl: './form-errors.css',
})
export class FormErrors {
@Input() control: AbstractControl | null = null;

  shouldShowErrors(): boolean {
    return !!(
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    );
  }

  listErrors(): string[] {
    if (!this.control?.errors) return [];
    return Object.keys(this.control.errors).map(key =>
      this.getMessage(key, this.control!.errors![key])
    );
  }

  getMessage(key: string, errorValue: any): string {
    const messages: Record<string, (e?: any) => string> = {
      required: () => 'This field is required',
      email: () => 'Enter a valid email address',
      minlength: e => `Minimum length is ${e.requiredLength}`,
      maxlength: e => `Maximum length is ${e.requiredLength}`,
      pattern: () => 'Invalid format',
      emailTaken: () => 'Email already exists'
    };

    return messages[key]?.(errorValue) || 'Invalid field';
  }
}
