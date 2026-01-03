import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDynamicForm } from './demo-dynamic-form';

describe('DemoDynamicForm', () => {
  let component: DemoDynamicForm;
  let fixture: ComponentFixture<DemoDynamicForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoDynamicForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDynamicForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
