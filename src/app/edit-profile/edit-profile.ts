import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile {
  isSaved = true;   // default true → form clean

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private router: Router) {
    // whenever user types, mark form dirty
    this.profileForm.valueChanges.subscribe(() => {
      this.isSaved = false;
    });
  }

  save() {
    this.isSaved = true;   // mark as saved
    alert('Profile Saved!');
  }

  // guard will call this
  hasUnsavedChanges(): boolean {
    return !this.isSaved;  // true = warn user
  }

  back(){
    // this.router.navigate(['/']);
     this.router.navigate(['/welcome']);
  }
}
