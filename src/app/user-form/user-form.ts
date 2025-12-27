import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { reservedNameValidator } from '../../custom-validators/validators/reservedName';
import { usernameAvailability } from '../../custom-validators/validators/username-availability.validator';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  form = new FormGroup({
    username: new FormControl(
      '',
      [Validators.required, reservedNameValidator()],
      [usernameAvailability]
    ),
    promo: new FormControl(false),
    promoCode: new FormControl('')
  });

  ngOnInit() {
    // Dynamically add validator when promo checkbox is checked
    this.form.get('promo')?.valueChanges.subscribe(checked => {
      const promoCodeControl = this.form.get('promoCode');
      if (checked) {
        promoCodeControl?.addValidators(Validators.required);
      } else {
        promoCodeControl?.clearValidators();
      }
      promoCodeControl?.updateValueAndValidity();
    });
  }

  onsubmit() {
    if (this.form.valid) {
      const formData = this.form.value; // get all form values
      console.log('Form Data:', formData);
      alert('Saved Successfully!');
    } else {
      alert('Form is invalid!');
      this.form.markAllAsTouched(); // show validation errors
    }
  }
}
