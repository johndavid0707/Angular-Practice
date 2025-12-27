import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { usernameAvailability } from '../../custom-validators/validators/username-availability.validator';

@Component({
  selector: 'app-async-validators',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './async-validators.html',
  styleUrl: './async-validators.css',
})
export class AsyncValidators {
username = new FormControl('', [Validators.required], [usernameAvailability]);
}
