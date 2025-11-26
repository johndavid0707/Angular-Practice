import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // read the fragment from URL
    this.route.fragment.subscribe(f => {
      console.log('Current fragment:', f); 
    });
  }

  goToTeam() {
    this.router.navigate(['/details'], { fragment: 'team' });
  }

  goToContact() {
    this.router.navigate(['/details'], { fragment: 'contact' });
  }
  
goBack(){
  this.router.navigate(['/about/content']);
}
}
