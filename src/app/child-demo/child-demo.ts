import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  imports: [],
  templateUrl: './child-demo.html',
  styleUrl: './child-demo.css',
})
export class ChildDemo {
  card_id = model.required<number | null>();

  changeChildValue() {
    this.card_id.update(c => (c ?? 0) + 1);
  }
}
