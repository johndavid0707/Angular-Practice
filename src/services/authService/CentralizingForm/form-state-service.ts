import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  // Holds form data
  private formData$ = new BehaviorSubject<any>(null);

  // Save form data
  setData(data: any) {
    this.formData$.next(data);
  }

  // Retrieve form data as observable
  getData(): Observable<any> {
    return this.formData$.asObservable();
  }
}
