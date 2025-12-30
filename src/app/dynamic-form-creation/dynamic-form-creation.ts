import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-creation',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form-creation.html',
  styleUrl: './dynamic-form-creation.css',
})
export class DynamicFormCreation {
// 🔹 This is the metadata / schema
//Hardcode
  fields = [
    {
      key: 'firstName',
      label: 'First Name',
      type: 'text',
      validators: [Validators.required]
    },
    {
      key: 'email',
      label: 'Email',
      type: 'email',
      validators: [Validators.required, Validators.email]
    },
    {
      key: 'age',
      label: 'Age',
      type: 'number',
      validators: [Validators.min(18)]
    }
  ];

  // 🔹 Empty form
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({});

    // 🔹 Create controls dynamically
    this.fields.forEach(field => {
      this.form.addControl(
        field.key,
        new FormControl('', field.validators)
      );
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
