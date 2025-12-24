import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive,],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
profileForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  email: new FormControl('', [Validators.required, Validators.email]),

   //Nested FormGroup
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      pincode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{6}$') // Indian pincode
      ])
    })
});

//Observing Value and Status Changes

ngOnInit() {
  this.profileForm.valueChanges.subscribe(value => console.log('Form Value:', value));
  this.profileForm.statusChanges.subscribe(status => console.log('Status:', status));
}

onSubmit(){
  console.log('Form output:', this.profileForm.value);
}
}
