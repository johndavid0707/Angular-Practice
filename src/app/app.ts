import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet, Event, NavigationError, RoutesRecognized, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('my-angular-app');

  //Below to check router events
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started to:', event.url);
      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended at:', event.url);
      }
      if (event instanceof NavigationError) {
      console.error('Navigation Error:', event.error);

      // Optional: redirect user
      this.router.navigate(['/']);

      // Optional: show your own alert
      // alert('Something went wrong while navigating!');
      
    }
    if (event instanceof RoutesRecognized) {
      console.log('Route Recognized:', event.url);
    }

    // Triggered when navigation is cancelled
    if (event instanceof NavigationCancel) {
      console.log('Navigation Cancelled:', event.reason);
    }
    });
  }

}
