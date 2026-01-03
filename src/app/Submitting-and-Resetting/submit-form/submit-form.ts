import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../../services/authService/userService/user-service';

@Component({
  selector: 'app-submit-form',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './submit-form.html',
  styleUrl: './submit-form.css',
})
export class SubmitForm {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required)
  });

  onSubmit() {
    if (this.form.invalid) return;
    alert("Form Saved Successfully " + this.form.value.name)
    console.log("Output: ", this.form.value);
  }

  //Form Submission

  isSubmitting = false;
  submissionMessage = '';

  userService = inject(UserService)

  formSubmission = new FormGroup({
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required)
  });

  submit() {
    if (this.formSubmission.invalid) return;
    this.isSubmitting = true;
    this.submissionMessage = "";

    this.userService.saveUsers(this.formSubmission.value).subscribe({
      next: (res) => {
        this.submissionMessage = '✅ Saved successfully!';
        this.isSubmitting = false;
        this.formSubmission.reset();
        this.formSubmission.markAsPristine();
        alert('Form saved and cleared');

        //Or Use below Reset to specific defaults

        // this.formSubmission.reset({
        //   username : 'John David',
        //   email : ''
        // });   
          
        console.log('Response:', res);
      },
      error: (err) => {
        this.submissionMessage = '❌ Failed to save. Please try again.';
        this.isSubmitting = false;
        console.error(err);
      }
    })
  }

}
