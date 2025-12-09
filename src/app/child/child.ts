import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // @Input() names!: string;
  // @Input() ages!: number;


   profile = input.required<{ name: string; age: number }>();
  
}
