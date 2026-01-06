import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ViewContainerRefComponent } from './view-container-ref-component/view-container-ref-component';

@Component({
  selector: 'app-dynamic-component-creation',
  imports: [RouterLink, RouterLinkActive, ViewContainerRefComponent],
  templateUrl: './dynamic-component-creation.html',
  styleUrl: './dynamic-component-creation.css',
})
export class DynamicComponentCreation {

}
