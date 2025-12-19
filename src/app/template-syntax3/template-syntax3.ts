import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-template-syntax3',
  imports: [CommonModule],
  templateUrl: './template-syntax3.html',
  styleUrl: './template-syntax3.css',
})
export class TemplateSyntax3 {
user = {role: 'admin'};
adminLevel = 'super';

UserRole = signal('');

selectedTab = 'settings';

productDetails = signal<{specs?: string } | null>({});

products = [
  {product_id: 1, name: 'Laptop', specs: '8GB RAM, 512GB SSD'},
  {product_id: 2, name: 'Mobile', specs: '16GB RAM, 128GB ROM'}
];

products_details = signal([
  { id: 1, name: 'Laptop', specs: '' },
  { id: 2, name: 'Phone', specs: '' }
]);

loadAllSpecs(){
  this.products_details.update(list =>
      list.map(p => ({ ...p, specs: '16GB RAM, 128GB ROM' }))
    );
  }
}

