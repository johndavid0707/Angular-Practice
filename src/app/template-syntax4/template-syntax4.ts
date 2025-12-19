import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-template-syntax4',
  imports: [CommonModule],
  templateUrl: './template-syntax4.html',
  styleUrl: './template-syntax4.css',
})
export class TemplateSyntax4 {

user = signal<{ profile?: { name?: string; age?: number } } | null>({ profile: { name: 'Alice', age: 25 } });

price = signal(125.369);

items = signal<number[] | null>([1,2,3,4,5]);

count = signal(0);

greet = signal<((name: string) => string) | null>((name: string) => `Hello, ${name}!`);

}
