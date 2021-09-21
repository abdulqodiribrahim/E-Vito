import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembayaranHarianDialogComponent } from './pembayaran-harian-dialog.component';

describe('PembayaranHarianDialogComponent', () => {
  let component: PembayaranHarianDialogComponent;
  let fixture: ComponentFixture<PembayaranHarianDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PembayaranHarianDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayaranHarianDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
