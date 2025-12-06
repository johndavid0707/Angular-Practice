import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  count = signal(0);

  double = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log(this.count());
    });
  }

  increment() {
    this.count.set(this.count() + 1);
  }


}
