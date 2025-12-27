import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { noSpaces } from '../../custom-validators/validators/noSpaces';
import { minWords } from '../../custom-validators/validators/minWords';
import { reservedNameValidator } from '../../custom-validators/validators/reservedName';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-custom-validators',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './custom-validators.html',
  styleUrl: './custom-validators.css',
})
export class CustomValidators {
username = new FormControl('', [Validators.required, noSpaces, minWords(3), reservedNameValidator()]);
}
