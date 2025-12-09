import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  //Traditional Way

  parentName = "John David";
  parentAge = 26;

  //Using Signals

  parentProfile = signal({ name: 'Raj', age: 25 });

  increaseAge() {
    this.parentProfile.update(p => ({ ...p, age: p.age + 1 }));
  }
}
