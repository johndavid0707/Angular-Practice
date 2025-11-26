import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api',
  imports: [CommonModule],
  templateUrl: './api.html',
  styleUrl: './api.css',
})
export class Api {
  
  user: any; // declare only, no early access

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }
}
