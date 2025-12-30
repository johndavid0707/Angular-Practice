import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordsMatch } from '../../custom-validators/validators/passwordMatch';

@Component({
  selector: 'app-cross-field-validation',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cross-field-validation.html',
  styleUrl: './cross-field-validation.css',
})
export class CrossFieldValidation {
passwordForm = new FormGroup({
  password: new FormControl("", Validators.required),
  confirmPassword: new FormControl("", Validators.required)
}, { validators: passwordsMatch })

onSubmit(){
  console.log("Password: ", this.passwordForm.value);
  alert("Password Updated Successfully!");
}
}
