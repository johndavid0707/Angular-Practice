import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-array.html',
  styleUrl: './form-array.css',
})
export class FormsArray {

  form = new FormGroup({
    name: new FormControl(""),

    phones: new FormArray([
      new FormControl('')
    ])
  });


  // Easy getter
  get phones() {
    return this.form.get('phones') as FormArray;
  }

  addPhone() {
    this.phones.push(new FormControl(''));
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
