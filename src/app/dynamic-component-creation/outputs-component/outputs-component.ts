import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './modal-component/modal-component';

@Component({
  selector: 'app-outputs-component',
  imports: [CommonModule],
  templateUrl: './outputs-component.html',
  styleUrl: './outputs-component.css',
})
export class OutputsComponent {
@ViewChild('modalBox', { read: ViewContainerRef })
box!: ViewContainerRef;

openModal() {
  const modalRef = this.box.createComponent(ModalComponent);

  modalRef.instance.close.subscribe(() => {
    modalRef.destroy();
  });
}

}
