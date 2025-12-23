import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.css',
})
export class TemplateDrivenForms {
user = {name: '', email: ''};

//Accessing the Form in Component

@ViewChild('formRef') form!: NgForm;

ngAfterViewInit() {
  console.log(this.form.value);
}

onSubmit(form: any){
console.log('Form Data:', form.value)
}
}
