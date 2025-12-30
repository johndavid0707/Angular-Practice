import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormCreation } from './dynamic-form-creation';

describe('DynamicFormCreation', () => {
  let component: DynamicFormCreation;
  let fixture: ComponentFixture<DynamicFormCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormCreation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormCreation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
