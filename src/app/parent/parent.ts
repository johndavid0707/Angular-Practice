import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  // parentName = "John";
  // parentAge = 25;

  parentProfile = signal({ name: 'John', age: 25 });

  increaseAge() {
    this.parentProfile.update(p => ({ ...p, age: p.age + 1 }));
  }
}
