import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cache$?: Observable<any[]>;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
        shareReplay(1) // cache the latest response
      );
    }
    return this.cache$;
  }

}
