import { CommonModule } from '@angular/common';
import { ApplicationRef, ChangeDetectorRef, Component, signal } from '@angular/core';

@Component({
  selector: 'app-zoneless-rendering',
  imports: [CommonModule],
  templateUrl: './zoneless-rendering.html',
  styleUrl: './zoneless-rendering.css',
})
export class ZonelessRendering {
counter = 0;
counter2 = 0;
counter3 =signal(0);

constructor(private appRef: ApplicationRef, private cdr: ChangeDetectorRef){}

increment(){
  this.counter++;
  this.appRef.tick();
}

incrementDemo2(){
this.counter2++;
this.cdr.detectChanges();
}

incrementDemo3(){
this.counter3.update(v=> v+1);

// setTimeout(() => {
//     this.counter3.update(v => v + 1);
//   }, 1000);
}
}
