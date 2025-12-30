import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormCreation2 } from './dynamic-form-creation2';

describe('DynamicFormCreation2', () => {
  let component: DynamicFormCreation2;
  let fixture: ComponentFixture<DynamicFormCreation2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormCreation2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormCreation2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
