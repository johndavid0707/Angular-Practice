import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-template-syntax2',
  imports: [CommonModule],
  templateUrl: './template-syntax2.html',
  styleUrl: './template-syntax2.css',
})
export class TemplateSyntax2 {

  items = [
    {id: 1, name: "John"},
    {id: 2, name: "Ram"},
    {id: 3, name: "Raju"}
  ];

  fruits = [
    {id: 4, name: "Apple"},
    {id: 5, name: "Grapes"},
    {id: 6, name: "Orange"},
    {id: 7, name: "Pineapple"}
  ];

  categories = [
    {
      name: 'Fruits',
      items: [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Orange' }
      ]
    },
    {
      name: 'Vegetables',
      items: [
        { name: 'Carrot' },
        { name: 'Potato' }
      ]
    }
  ];

  products= signal([
    {id: 10, name: "Laptop", stock: 10},
    {id: 15, name: "Mobile", stock: 8},
    {id: 20, name: "Tab", stock: 0}
  ]);

  addProduct() {
    this.products.update(list => [
      ...list,
      { id: 25, name: 'TV', stock: 5 }
    ]);
  };

  staffs = [
    { id: 1, name: "John", available: true },
    { id: 2, name: "Ganesh", available: false },
    { id: 3, name: "Ram", available: true }
  ];
  
}
