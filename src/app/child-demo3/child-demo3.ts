import { Component, effect, model, signal } from '@angular/core';

@Component({
  selector: 'app-child-demo3',
  imports: [],
  templateUrl: './child-demo3.html',
  styleUrl: './child-demo3.css',
})
export class ChildDemo3 {
  card_id = model.required<number | null>();
  flipTimeout = signal<number | null>(null);

  constructor() {
    effect(() => {
      if (this.card_id() !== null) {
        this.flipTimeout.set(Date.now() + 1000);
      }
    });
  }
}
