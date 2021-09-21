import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturPembelianDialogComponent } from './retur-pembelian-dialog.component';

describe('ReturPembelianDialogComponent', () => {
  let component: ReturPembelianDialogComponent;
  let fixture: ComponentFixture<ReturPembelianDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturPembelianDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturPembelianDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
