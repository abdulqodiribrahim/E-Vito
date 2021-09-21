import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembayaranFeeDialogComponent } from './pembayaran-fee-dialog.component';

describe('PembayaranFeeDialogComponent', () => {
  let component: PembayaranFeeDialogComponent;
  let fixture: ComponentFixture<PembayaranFeeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PembayaranFeeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayaranFeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
