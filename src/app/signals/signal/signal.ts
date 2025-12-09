import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  count = signal(0);

  // double = computed(() => this.count() * 2);


  constructor() {
    effect(() => {
      // console.log(this.count());
      console.log('Count changed to', this.count());
    });
  }

  increment() {
    // this.count.set(this.count() + 1);
    this.count.update(c => c + 1);
  }


  //Example 2 using number

  // increase() {
  //   this.count.update(value => value + 1); // add 1
  // }

  // reset() {
  //   this.count.set(5); // set to new value
  // }


  //Example 3 using object

  // user = signal({ name: 'John', age: 25 });

  // increaseAge() {
  //   this.user.update(u => ({ ...u, age: u.age + 1 }));
  // }

  // changeName() {
  //   this.user.update(u => ({ ...u, name: 'Peter' }));
  // }


  //Example 4 using array

  items = signal<string[]>([]);

  addItem() {
    this.items.update(arr => [...arr, 'Item ' + (arr.length + 1)]);
  }

  clear() {
    this.items.set([]);  // empty array
  }

}
