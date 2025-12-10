import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDemo2 } from './parent-demo2';

describe('ParentDemo2', () => {
  let component: ParentDemo2;
  let fixture: ComponentFixture<ParentDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentDemo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDemo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
