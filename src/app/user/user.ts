import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit  {
  constructor(private router: Router, private route: ActivatedRoute) {}

  userId: any;

goBack(){
  this.router.navigate(['/userinfo']);
}

ngOnInit(): void {
    
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
