import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDemo3 } from './child-demo3';

describe('ChildDemo3', () => {
  let component: ChildDemo3;
  let fixture: ComponentFixture<ChildDemo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDemo3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDemo3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
