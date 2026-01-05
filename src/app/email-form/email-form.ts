import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { debounceTime, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-email-form',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './email-form.html',
  styleUrl: './email-form.css',
})
export class EmailForm {
  form!: FormGroup;
  private subscriptions = new Subscription();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //Form Creation

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      state: [{value: '', disabled: true}]
    });

    //React to email value changes (RxJS stream)

    const emailChanged$ = this.form.get('email')!.valueChanges
      .pipe(debounceTime(500),  // wait 500ms after typing
        filter(value => !!value)   // ignore empty values
      ).subscribe(value => {
        console.log('Email Changed: ', value);
      });

      this.form.get('country')!.valueChanges.subscribe(country => {
      if (country === 'USA') {
        this.form.get('state')!.enable();
      } 
      else if (country === 'India'){
        this.form.get('state')!.enable();
      }
      else if (country === 'UK'){
        this.form.get('state')!.enable();
      }
      else {
        this.form.get('state')!.disable();
      }
    });

    // React to form status changes

    const statusChanges$ = this.form.statusChanges
      .subscribe(status => {
        console.log('Form status:', status);
      });

    // Track subscriptions
    this.subscriptions.add(emailChanged$);
    this.subscriptions.add(statusChanges$);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  submit(){
    console.log("Live Data: ", this.form.value);
  }
}
