import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from './card-component/card-component';

@Component({
  selector: 'app-inputs-component',
  imports: [CommonModule],
  templateUrl: './inputs-component.html',
  styleUrl: './inputs-component.css',
})
export class InputsComponent {
@ViewChild('cardBox', { read: ViewContainerRef })
box!: ViewContainerRef;

addCard() {
  const ref = this.box.createComponent(CardComponent);

  ref.instance.title = 'Dynamic Card';
  ref.instance.content = 'This data comes from TS';
}

}
