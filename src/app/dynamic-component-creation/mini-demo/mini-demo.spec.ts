import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDemo } from './mini-demo';

describe('MiniDemo', () => {
  let component: MiniDemo;
  let fixture: ComponentFixture<MiniDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
