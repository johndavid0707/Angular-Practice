import { Component, computed, effect, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linkedsignal',
  imports: [],
  templateUrl: './linkedsignal.html',
  styleUrl: './linkedsignal.css',
})
export class Linkedsignal {
  count = signal(0);
// nextCount = linkedSignal(this.count, c => c + 1);

nextCount = linkedSignal({ source: this.count, computation: c => c + 1 });

// doubleCount = computed(() => this.count() * 2);

 constructor() {
    effect(() => {
      console.log('Count changed to', this.count());
      console.log('Linked Count changed to', this.nextCount());
    });
  }

increment(){
  this.count.set(this.count() + 1);
}

}
