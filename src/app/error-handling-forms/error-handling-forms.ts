import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { passwordsMatch } from '../../custom-validators/validators/passwordMatch';

@Component({
  selector: 'app-error-handling-forms',
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './error-handling-forms.html',
  styleUrl: './error-handling-forms.css',
})
export class ErrorHandlingForms {

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  });

  get email() {
    return this.form.get('email')!;
  }

  onSubmit() {
    console.log("Data :", this.form.value);
  }

  //Group-level Errors
  
  passwordForm = new FormGroup({
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required)
  }, {validators: passwordsMatch})
}
