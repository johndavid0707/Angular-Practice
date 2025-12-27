import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { noSpaces } from '../../custom-validators/validators/noSpaces';
import { usernameAvailability } from '../../custom-validators/validators/username-availability.validator';

@Component({
  selector: 'app-combined-validator-demo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './combined-validator-demo.html',
  styleUrl: './combined-validator-demo.css',
})
export class CombinedValidatorDemo {
  username = new FormControl('', [Validators.required, noSpaces], [usernameAvailability]);
}
