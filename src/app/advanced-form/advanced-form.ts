import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-advanced-form',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './advanced-form.html',
  styleUrl: './advanced-form.css',
})
export class AdvancedForm {
profileForm = new FormGroup({
  name: new FormControl("", Validators.required),
  phone: new FormControl("", Validators.required),

  address: new FormGroup({
    city: new FormControl("", Validators.required),
    pincode: new FormControl("", Validators.required)
  })
});

onSubmit(){
  console.log('Profile Data:', this.profileForm.value);
}
}
