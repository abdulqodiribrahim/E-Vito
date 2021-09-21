import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembayaranFeeComponent } from './pembayaran-fee.component';

describe('PembayaranFeeComponent', () => {
  let component: PembayaranFeeComponent;
  let fixture: ComponentFixture<PembayaranFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PembayaranFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayaranFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
