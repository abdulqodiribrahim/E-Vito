import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenjualanDialogComponent } from './penjualan-dialog.component';

describe('PenjualanDialogComponent', () => {
  let component: PenjualanDialogComponent;
  let fixture: ComponentFixture<PenjualanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenjualanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenjualanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
