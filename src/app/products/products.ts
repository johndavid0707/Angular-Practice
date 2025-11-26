import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  category: string | null = '';
  sort: string | null = '';

constructor(private router: Router, private route: ActivatedRoute) {}

goBack(){
  this.router.navigate(['/about/content']);
}

ngOnInit(): void {
    // ✅ Read query parameters
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.sort = params.get('sort');
    });
  }

  // ✅ Navigate with query parameters
  filterProducts(category: string, sort: string) {
    this.router.navigate(['/products'], {
      queryParams: { category, sort }
    });
  }
}
