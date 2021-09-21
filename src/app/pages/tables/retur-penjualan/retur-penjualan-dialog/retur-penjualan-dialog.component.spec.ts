import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturPenjualanDialogComponent } from './retur-penjualan-dialog.component';

describe('ReturPenjualanDialogComponent', () => {
  let component: ReturPenjualanDialogComponent;
  let fixture: ComponentFixture<ReturPenjualanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturPenjualanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturPenjualanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
