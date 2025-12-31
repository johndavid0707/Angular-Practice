import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-message-handling',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './validation-message-handling.html',
  styleUrl: './validation-message-handling.css',
})
export class ValidationMessageHandling {

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);

    if (!control || !control.errors || !control.touched) {
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

    if (control.hasError('maxlength')) {
      const error = control.getError('maxlength');
      return `Maximum length is ${error.requiredLength}`;
    }

    return 'Invalid field';
  }

  onSubmit() {
    console.log("Data :", this.form.value);
  }
}
