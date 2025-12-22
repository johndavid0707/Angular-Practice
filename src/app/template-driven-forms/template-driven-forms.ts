import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.css',
})
export class TemplateDrivenForms {
user = {name: '', email: ''};

onSubmit(form: any){
console.log('Form Data:', form.value)
}
}
