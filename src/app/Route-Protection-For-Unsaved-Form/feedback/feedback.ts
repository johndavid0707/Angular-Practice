import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CanComponentDeactivate } from '../../../guard/canActive/UnsavedChangesGuard/UnsavedChangesGuard';

@Component({
  selector: 'app-feedback',
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css',
})
export class Feedback implements CanComponentDeactivate {
  @ViewChild('feedbackForm') form!: NgForm;

  saved = false;

  submitForm() {
    console.log('Form Data: ', this.form.value);
    this.saved = true;

    this.form.form.markAsPristine();
  }

  canDeactivate(): boolean {
    if (this.form?.dirty && !this.saved) {
      return confirm('Form not saved. Leave anyway?');
    }
    return true;
  }

}
