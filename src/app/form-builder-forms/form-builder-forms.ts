import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-builder-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-builder-forms.html',
  styleUrl: './form-builder-forms.css',
})
export class FormBuilderForms {
form: FormGroup;

constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    name : [''],
    age: ['']
  });
}

submit(){
  console.log("Live Data : ", this.form.value)
}
}
