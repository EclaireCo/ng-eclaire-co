import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBoutiqueComponent } from './btn-boutique.component';

describe('BtnBoutiqueComponent', () => {
  let component: BtnBoutiqueComponent;
  let fixture: ComponentFixture<BtnBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBoutiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
