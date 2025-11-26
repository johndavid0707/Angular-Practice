import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRxjs } from './reactive-rxjs';

describe('ReactiveRxjs', () => {
  let component: ReactiveRxjs;
  let fixture: ComponentFixture<ReactiveRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveRxjs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveRxjs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
