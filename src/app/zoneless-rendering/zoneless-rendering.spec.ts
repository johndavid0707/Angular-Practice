import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessRendering } from './zoneless-rendering';

describe('ZonelessRendering', () => {
  let component: ZonelessRendering;
  let fixture: ComponentFixture<ZonelessRendering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelessRendering]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonelessRendering);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
