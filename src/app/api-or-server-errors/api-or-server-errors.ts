import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-api-or-server-errors',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './api-or-server-errors.html',
  styleUrl: './api-or-server-errors.css',
})
export class ApiOrServerErrors {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submissionError: string | null = null;

  constructor(private http: HttpClient) { }

  onSubmit() {
    // stop if form is invalid
    if (this.form.invalid) return;

    const emailValue = this.form.get('email')?.value;

    // Call JSONPlaceholder API (GET users)
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: users => {
        // Simulate server-side validation
        const emailExists = emailValue ? users.some(user => user.email.toLowerCase() === emailValue.toLowerCase()) : false;

        if (emailExists) {
          // Inject server error into form control
          this.form.get('email')?.setErrors({ emailTaken: true });
        } else {
          console.log('Success! Form submitted:', this.form.value);
          this.submissionError = null;
        }
      },
      error: err => {
        console.error(err);
        this.submissionError = 'Something went wrong. Please try again.';
      }
    });
  }

  // getter for easy template access
  get email() {
    return this.form.get('email')!;
  }
}
