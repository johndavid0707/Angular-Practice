import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentCreation } from './dynamic-component-creation';

describe('DynamicComponentCreation', () => {
  let component: DynamicComponentCreation;
  let fixture: ComponentFixture<DynamicComponentCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponentCreation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicComponentCreation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
