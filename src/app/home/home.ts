import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { combineLatest, concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, forkJoin, from, fromEvent, interval, map, merge, mergeMap, Observable, of, Subject, switchMap, take, takeUntil, timer, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

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
  }

}
