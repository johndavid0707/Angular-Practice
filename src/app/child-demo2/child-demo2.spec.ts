import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDemo2 } from './child-demo2';

describe('ChildDemo2', () => {
  let component: ChildDemo2;
  let fixture: ComponentFixture<ChildDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDemo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDemo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
