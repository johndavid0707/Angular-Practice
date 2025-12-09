import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  //Traditional Way

  @Input() names!: string;
  @Input() ages!: number;

  // Using Signals

  profile = input.required<{ name: string; age: number }>();

}
