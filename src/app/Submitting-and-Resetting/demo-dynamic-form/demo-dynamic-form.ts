import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { cityZipValidator } from '../../../custom-validators/validators/cityValidators';

@Component({
  selector: 'app-demo-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './demo-dynamic-form.html',
  styleUrl: './demo-dynamic-form.css',
})
export class DemoDynamicForm {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    addresses: new FormArray([this.createAddressGroup()])
  });

  createAddressGroup(): FormGroup {
    return new FormGroup({
      city: new FormControl('', Validators.required),
      zip: new FormControl('', [Validators.required, Validators.minLength(5)])
    }, { validators: cityZipValidator });
  }

  get addresses() { return this.form.get('addresses') as FormArray; }

  addAddress() { this.addresses.push(this.createAddressGroup()); }

  removeAddress(i: number) { this.addresses.removeAt(i); }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
