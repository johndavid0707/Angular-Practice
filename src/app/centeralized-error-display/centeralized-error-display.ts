import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrors } from '../form-errors/form-errors';

@Component({
  selector: 'app-centeralized-error-display',
  imports: [ReactiveFormsModule, CommonModule, FormErrors],
  templateUrl: './centeralized-error-display.html',
  styleUrl: './centeralized-error-display.css',
})
export class CenteralizedErrorDisplay {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);

  }
}
