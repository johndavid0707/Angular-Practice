import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-template-syntax5',
  imports: [CommonModule],
  templateUrl: './template-syntax5.html',
  styleUrl: './template-syntax5.css',
})
export class TemplateSyntax5 {
  showPanel = signal(false);
  items = signal(['Apple', 'Orange', 'Grapes']);
  products = signal(['Phone', 'Laptop', 'Tablet']);
  showStats = signal(false);
  stats = signal([10,20,30]);

  toggle() {
    this.showPanel.set(!this.showPanel());
  }

  addFunction(){
    this.items.update(list => [...list, 'Cherry']);
  }

  removeFunction(){
    this.items.update(list => list.slice(1));
  }

  toggleStats(){
    this.showStats.set(!this.showStats());
  }
}
