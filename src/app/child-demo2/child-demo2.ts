import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child-demo2',
  imports: [],
  templateUrl: './child-demo2.html',
  styleUrl: './child-demo2.css',
})
export class ChildDemo2 {
  toggled = output<number | null>();

  sendValue() {
    this.toggled.emit(42);  // Emit value to parent
  }
}
