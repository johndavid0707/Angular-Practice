import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastComponent } from './toast-component/toast-component';

@Component({
  selector: 'app-mini-demo',
  imports: [CommonModule],
  templateUrl: './mini-demo.html',
  styleUrl: './mini-demo.css',
})
export class MiniDemo {
@ViewChild('mini', {read: ViewContainerRef})
container!: ViewContainerRef;

onSubmit(){
const miniDemo = this.container.createComponent(ToastComponent);

miniDemo.instance.message = "Saved Successfully!";

setTimeout(() => {
  miniDemo.destroy();
}, 5000)

}
}
