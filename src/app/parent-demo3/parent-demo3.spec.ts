import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDemo3 } from './parent-demo3';

describe('ParentDemo3', () => {
  let component: ParentDemo3;
  let fixture: ComponentFixture<ParentDemo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentDemo3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDemo3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
