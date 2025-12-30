import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/authService/userService/user-service';

@Component({
  selector: 'app-dynamic-form-creation2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form-creation2.html',
  styleUrl: './dynamic-form-creation2.css',
})
export class DynamicFormCreation2 {
form!: FormGroup;
  users: any[] = [];

  // 🔹 Dynamic schema (based on API)
  fields = [
    { key: 'name', label: 'Name', type: 'text', validators: [Validators.required] },
    { key: 'username', label: 'Username', type: 'text', validators: [] },
    { key: 'email', label: 'Email', type: 'email', validators: [Validators.email] },
    { key: 'phone', label: 'Phone', type: 'text', validators: [] },
    { key: 'website', label: 'Website', type: 'text', validators: [] }
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.createForm();
    this.loadUsers();
  }

  createForm() {
    this.form = new FormGroup({});
    this.fields.forEach(field => {
      this.form.addControl(
        field.key,
        new FormControl('', field.validators)
      );
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;

      // 🔹 Load first user into form
      if (this.users.length > 0) {
        this.form.patchValue(this.users[0]);
      }
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
