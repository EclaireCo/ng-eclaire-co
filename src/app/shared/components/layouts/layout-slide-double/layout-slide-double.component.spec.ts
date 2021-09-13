import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSlideDoubleComponent } from './layout-slide-double.component';

describe('LayoutSlideDoubleComponent', () => {
  let component: LayoutSlideDoubleComponent;
  let fixture: ComponentFixture<LayoutSlideDoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSlideDoubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSlideDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
