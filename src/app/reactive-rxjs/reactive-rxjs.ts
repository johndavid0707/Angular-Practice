import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-reactive-rxjs',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './reactive-rxjs.html',
  styleUrl: './reactive-rxjs.css',
})
export class ReactiveRxjs implements OnInit {
  private sub: any;

  users: any[] = [];

  constructor(private http: HttpClient) {}



  ngOnInit() {
    const obs$ = new Observable(observer => {
      observer.next('A');
      observer.next('B');
      observer.complete();
    });

    const observer = {
      next: (val: any) => console.log('Value:', val),
      error: (err: any) => console.error('Error:', err),
      complete: () => console.log('Stream completed')
    };

    //or

    //   const observer: Observer<any> = {
    //   next: val => console.log('Value:', val),
    //   error: err => console.error('Error:', err),
    //   complete: () => console.log('Stream completed')
    // };


    this.sub = obs$.subscribe(observer);

    //using Subject

    // const subject = new Subject<number>();
    // subject.subscribe(value => console.log('Person 1:', value));
    // subject.subscribe(value => console.log('Person 2:', value));
    // subject.next(100);
    // subject.next(200);



    //using BehaviorSubject

    // const user$ = new BehaviorSubject<string>('John');
    // user$.subscribe(name => console.log('Subscriber 1:', name));
    // user$.next('Alice');
    // user$.subscribe(name => console.log('Subscriber 2:', name));
    // user$.next('Bob');
    // user$.subscribe(name => console.log('Subscriber 3:', name));



    //using ReplaySubject

    const replay$ = new ReplaySubject(2);

    replay$.next(1);
    replay$.next(2);
    replay$.next(3);

    replay$.subscribe(v => console.log('Subscriber got:', v));


    //using AsyncSubject

    // const async$ = new AsyncSubject();

    // async$.subscribe(v => console.log('Sub:', v));

    // async$.next(1);
    // async$.next(2);
    // async$.complete();

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.users = res;
      });

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
      console.log('Manually unsubscribed!');
    }
  }

}


// --- Using takeUntil to Auto Unsubscribe---


// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Observable, Subject, takeUntil } from 'rxjs';

// @Component({
//   selector: 'app-reactive-rxjs',
//   imports: [],
//   templateUrl: './reactive-rxjs.html',
//   styleUrl: './reactive-rxjs.css',
// })
// export class ReactiveRxjs implements OnInit, OnDestroy {

//   private destroy$ = new Subject<void>();

//   ngOnInit() {
//     const obs$ = new Observable(observer => {
//       observer.next('A');
//       observer.next('B');
//       observer.complete();
//     });

//     const observer = {
//       next: (val: any) => console.log('Value:', val),
//       error: (err: any) => console.error('Error:', err),
//       complete: () => console.log('Stream completed')
//     };

//     obs$
//       .pipe(takeUntil(this.destroy$))
//       .subscribe(observer);
//   }

//   ngOnDestroy() {
//     this.destroy$.next();
//     this.destroy$.complete();
//     console.log('takeUntil unsubscribed automatically!');
//   }
// }

