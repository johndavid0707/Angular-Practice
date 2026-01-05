import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormStateService } from '../../services/authService/CentralizingForm/form-state-service';

@Component({
  selector: 'app-centralizing-form-state',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './centralizing-form-state.html',
  styleUrl: './centralizing-form-state.css',
})
export class CentralizingFormState {
form!: FormGroup;

constructor(private fb: FormBuilder, private stateService: FormStateService){
  //Create Form

  this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required]
  });

  //Patch existing state if available

  this.stateService.getData().subscribe(data => {
   if(data){
    this.form.patchValue(data)
   }
  });

  //Save form changes to the service

  this.form.valueChanges.subscribe(value => {
    this.stateService.setData(value)
  })

}

onSubmit(){
  console.log("Data : ", this.form.value)
}
}
