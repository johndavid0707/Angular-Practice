import { Component } from '@angular/core';
import { ChildDemo2 } from '../child-demo2/child-demo2';

@Component({
  selector: 'app-parent-demo2',
  imports: [ChildDemo2],
  templateUrl: './parent-demo2.html',
  styleUrl: './parent-demo2.css',
})
export class ParentDemo2 {
lastValue: number | null = null;

  handleToggle(value: number | null) {
    this.lastValue = value;
  }
}
