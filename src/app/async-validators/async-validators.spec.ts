import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValidators } from './async-validators';

describe('AsyncValidators', () => {
  let component: AsyncValidators;
  let fixture: ComponentFixture<AsyncValidators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncValidators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncValidators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
