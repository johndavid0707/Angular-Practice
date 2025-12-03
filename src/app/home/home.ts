import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { catchError, combineLatest, concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, finalize, forkJoin, from, fromEvent, interval, map, merge, mergeMap, Observable, of, retry, retryWhen, scan, Subject, Subscription, switchMap, take, takeUntil, tap, throwError, timer, withLatestFrom } from 'rxjs';
import { ErrorHandler } from '../../services/authService/ErrorHandler/error-handler';
import { DataService } from '../../services/authService/dataservice/data-service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users: any[] = [];
  loading: boolean | undefined;
  errorMsg: string | undefined;
  private userSubscription!: Subscription;
  posts: any[] = [];


  constructor(private http: HttpClient, private errorHandler: ErrorHandler, private dataservice: DataService) {

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    //   .subscribe({
    //     next: users => this.users = users,
    //     error: err => console.error('Error :', err)
    //   });



    // Example: Transform + Log + Error Handling

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    //   .pipe(
    //     tap(() => console.log('Request started')),
    //     map(users => this.users = users),
    //     catchError(error => {
    //       console.error('Error occurred:', error);
    //       return of([]); // Return fallback value
    //     })
    //   )
    //   .subscribe(users => console.log('Active users:', users));



    // Typed + Chained Example

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
    //   .pipe(
    //     map(posts => posts.slice(0, 5)), // only first 5
    //     tap(() => console.log('Fetched top 5 posts'))
    //   )
    //   .subscribe(posts => this.posts = posts);


    //Basic Local Error Handling

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     console.error('Error:', error.message);
    //     return throwError(() => new Error('Something went wrong. Please try again.'));
    //   })
    // ).subscribe({
    //   next: data => console.log(data),
    //   error: err => console.log(err.message)
    // });


    //Centralized Error Handling Service

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
    //   catchError(err => this.errorHandler.handleError(err))

    // ).subscribe({
    //   next: data => console.log(data),
    //   error: err => console.log(err.message)
    // });


    //Retry Failed Requests

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    //   .pipe(
    //     retry(2) // retry up to 2 times on error
    //   )
    //   .subscribe({
    //     next: data => console.log(data),
    //     error: err => console.error('Final error after retries', err)
    //   });


    //Exponential Backoff

    // this.http.get('https://jsonplaceholder.typicode.com/users')
    //   .pipe(
    //     retryWhen(errors =>
    //       errors.pipe(
    //         scan((acc: number, error) => {
    //           if (acc >= 3) throw error; // max 3 retries
    //           return acc + 1;
    //         }, 0),
    //         tap((acc: number) => console.log(`Retrying after ${acc * 1000}ms`)),
    //         delay(1000)
    //       )
    //     )
    //   )
    //   .subscribe({
    //     next: data => console.log(data),
    //     error: err => console.error('Request failed after retries', err)
    //   });


    //Simple Caching Strategy

    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
      console.log('Users:', data);
    });
  }




  ngOnInit() {

    //Example 1  Creating Observables


    //of(1, 2, 3).subscribe(x => console.log(x)); 

    //from([10, 20, 30]).subscribe(x => console.log(x));

    //interval(1000).subscribe(x => console.log(x));

    //timer(2000).subscribe(x => console.log("Hello after 2 sec")); 

    //timer(2000, 1000).subscribe(x => console.log(x));

    // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

    //fromEvent(document,'mousemove').subscribe(() => console.log('Mouse moved!'));

    //fromEvent(document,'keydown').subscribe(() => console.log('Key pressed!'));



    //Example 2   Transforming Observables

    //of(1,2,3).pipe(map(x => x * 2)).subscribe(console.log);

    // from([1, 2, 3]).pipe(
    //   mergeMap(x =>
    //     of(`Completed ${x}`).pipe(delay(1000))
    //   )
    // ).subscribe(console.log);

    // from(['H', 'He', 'Hel', 'Hell', 'Hello'])
    //   .pipe(
    //     switchMap(text => of(`Searching for: ${text}`).pipe(delay(500)))
    //   )
    //   .subscribe(console.log);

    // from([1, 2, 3]).pipe(
    //   concatMap(x =>
    //     of(`Completed ${x}`).pipe(delay(1000))
    //   )
    // ).subscribe(console.log);

    // fromEvent(document, 'click')
    //   .pipe(
    //     exhaustMap(() =>
    //       of('Processing click...').pipe(delay(2000))
    //     )
    //   )
    //   .subscribe(console.log);




    //Example 3  Filtering Observables

    // of(5, 4, 3, 2, 1).pipe(
    //   filter(x => x > 2)
    // ).subscribe(console.log);

    // of(1, 2, 3, 4, 5)
    //   .pipe(take(3))
    //   .subscribe(console.log);

    // const stop$ = new Subject();

    // interval(1000)
    //   .pipe(takeUntil(stop$))
    //   .subscribe(console.log);
    // setTimeout(() => stop$.next(true), 3500);


    // fromEvent(document, 'click')
    //   .pipe(
    //     debounceTime(1000)
    //   )
    //   .subscribe(() => console.log("Button clicked (after wait)"));

    // from([1, 7, 3, 3, 3, 6, 6, 2, 3, 1])
    //   .pipe(distinctUntilChanged())
    //   .subscribe(console.log);




    //Example 4  Combination Observables

    // combineLatest([
    //   of(1, 2, 3),
    //   of(10, 20, 30)
    // ]).subscribe(console.log);

    // forkJoin([
    //   of(10, 15, 25),
    //   of(20, 18, 19),
    //   of(30, 29, 38)
    // ]).subscribe(console.log);

    // merge(
    //   of(10, 20, 30),
    //   of(40, 50, 60),
    //   of(70, 80, 90)
    // ).subscribe(console.log);

    // const main$ = interval(2000);     // emits every 2 seconds
    // const helper$ = interval(1000);   // emits every 1 second

    // main$
    //   .pipe(withLatestFrom(helper$))
    //   .subscribe(console.log);


    //Example 5  Free Fake API to Get Request

    // 1, Basic Error Handling in subscribe()

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe({
    //   next: users => this.users = users,
    //   error: err => console.error('Error occurred:', err),
    //   complete: () => console.log('Request completed')
    // });

    // 2, Using catchError() Operator

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
    // catchError(err => {
    //   console.error('Failed to load users:', err);
    //   return of([]);
    // })
    // ).subscribe(users => this.users = users);

    // 3, Retrying Failed Requests — retry() and retryWhen()

    // this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
    //   retry(3), // Try 3 times
    //   catchError(() => of({ error: true }))
    // ).subscribe(console.log);

    // this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
    //   retryWhen(errors => errors.pipe(
    //     delay(1000),
    //     retry(3)
    //   ))
    // ).subscribe(console.log);


    //Example 6  Final Cleanup with finalize()

    // this.loading = true;
    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
    //   finalize(() => this.loading = false)
    // ).subscribe(users => this.users = users);

    //Example 7 Graceful Error Handling Example (Combined)

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
    //   retry(2),
    //   catchError(err => {
    //     console.error('Failed to load users:', err);
    //     return of([]);
    //   }),
    //   finalize(() => this.loading = false)
    // );



    //Example 8 Cleanup: Unsubscribing to Avoid Memory Leaks

    // this.userSubscription = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    //   .subscribe(users => {
    //     console.log('Users:', users);
    //   });

  }

  onSubmit(form: any) {
    console.log('Form Data:', form.value);

    this.http.post('https://jsonplaceholder.typicode.com/posts', form.value)
      .subscribe(res => console.log('Response:', res));
  }


  onUpdate(form: any) {
    const updatedData = form.value;

    this.http.put('https://jsonplaceholder.typicode.com/posts/1', updatedData)
      .subscribe(response => {
        console.log('PUT Response:', response);
      });
  }

  onPatch(form: any) {
    const partialData = form.value;

    this.http.patch(
      'https://jsonplaceholder.typicode.com/posts/1',
      partialData
    ).subscribe(res => {
      console.log("PATCH Response:", res);
    });
  }


  onDelete(form: any) {
    const id = form.value.id;

    this.http.delete(
      'https://jsonplaceholder.typicode.com/posts/' + id
    ).subscribe(response => {
      console.log('DELETE Response:', response);
      alert('Post Deleted (fake)!');
    });
  }


  // ngOnDestroy() {
  //   console.log('Component destroyed unsubscribing...');
  //   this.userSubscription.unsubscribe();
  // }

}
