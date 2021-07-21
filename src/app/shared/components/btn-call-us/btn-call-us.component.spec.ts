import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCallUsComponent } from './btn-call-us.component';

describe('BtnCallUsComponent', () => {
  let component: BtnCallUsComponent;
  let fixture: ComponentFixture<BtnCallUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCallUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCallUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
