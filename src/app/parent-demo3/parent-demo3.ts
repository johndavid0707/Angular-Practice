import { Component, signal } from '@angular/core';
import { ChildDemo3 } from '../child-demo3/child-demo3';

@Component({
  selector: 'app-parent-demo3',
  imports: [ChildDemo3],
  templateUrl: './parent-demo3.html',
  styleUrl: './parent-demo3.css',
})
export class ParentDemo3 {
 selectedCard = signal<number | null>(null);
}
