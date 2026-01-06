import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MessageComponent } from './message-component/message-component';

@Component({
  selector: 'app-view-container-ref-component',
  imports: [CommonModule],
  templateUrl: './view-container-ref-component.html',
  styleUrl: './view-container-ref-component.css',
})
export class ViewContainerRefComponent {

  @ViewChild('box', {read: ViewContainerRef})         //ViewContainerRef
   container!: ViewContainerRef;

  showMessage(){
    const componentRef = this.container.createComponent(MessageComponent);   //createComponent
  }
}
