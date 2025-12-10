import { Component, signal } from '@angular/core';
import { ChildDemo } from '../child-demo/child-demo';

@Component({
  selector: 'app-parent-demo',
  imports: [ChildDemo],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {
  selectedCardSignal = signal(10);

  increaseFromParent() {
    this.selectedCardSignal.update(v => v + 1);
  }
}
