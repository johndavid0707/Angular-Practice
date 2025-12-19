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

}
