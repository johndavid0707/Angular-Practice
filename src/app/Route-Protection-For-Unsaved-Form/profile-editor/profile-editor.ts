import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CanComponentDeactivate } from '../../../guard/canActive/UnsavedChangesGuard/UnsavedChangesGuard';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile-editor',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './profile-editor.html',
  styleUrl: './profile-editor.css',
})
export class ProfileEditor implements CanComponentDeactivate {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required)
  });

  saved = false;

  onSubmit() {
    console.log("Data: ", this.form.value);
    this.saved = true;
  }

  canDeactivate(): boolean {
    if (this.form.dirty && !this.saved) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

}
