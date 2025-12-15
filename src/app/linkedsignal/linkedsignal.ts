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

  increment() {
    this.count.set(this.count() + 1);
  }

  //Linked Signal Example

  ngAfterViewInit() {

    //Example 1 Simple linkedSignal

    // const shippingOptions = signal(['Ground', 'Air', 'Sea']);

    // const selectedOption = linkedSignal(
    //   () => shippingOptions()[0]
    // );

    // console.log("Selected Options : ", selectedOption()); 

    // selectedOption.set(shippingOptions()[2]);
    // console.log("Selected Options using Index : ",selectedOption()); 

    // shippingOptions.set(['Mail', 'Pickup', 'Drone']);
    // console.log("Selected Options new : ",selectedOption()); 



    //Example 2 Advanced linkedSignal with source & previous state

    // const shippingOptions = signal(['Ground', 'Air', 'Sea']);

    // const selectedOption = linkedSignal({
    //   source: shippingOptions,
    //   computation: (newOptions, previous) => {
    //     // if prev value still exists in new options, keep it
    //     const found = newOptions.find(
    //       o => o === previous?.value
    //     );
    //     return found ?? newOptions[0];
    //   }
    // });
    // console.log("Selected Options : ", selectedOption());


    //Example 3 Custom Equality Comparison

    const activeUser = signal({ id: 1, name: 'John' });

    const activeUserEdit = linkedSignal({
      source: activeUser,
      computation: (user) => user,
      equal: (a, b) => a.id === b.id
    });
    console.log("Active User Edit : ", activeUserEdit());
  }

}
