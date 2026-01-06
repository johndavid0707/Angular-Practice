import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { LifeComponent } from './life-component/life-component';

@Component({
  selector: 'app-lifecycle-hooks-component',
  imports: [CommonModule],
  templateUrl: './lifecycle-hooks-component.html',
  styleUrl: './lifecycle-hooks-component.css',
})
export class LifecycleHooksComponent {

@ViewChild('life', {read: ViewContainerRef})
container! : ViewContainerRef

clickHere(){
const ref = this.container.createComponent(LifeComponent);

// this.container.clear;     //clear or destroy

setTimeout(() => {
  ref.destroy();   //Cleanup
}, 3000);

}
}
