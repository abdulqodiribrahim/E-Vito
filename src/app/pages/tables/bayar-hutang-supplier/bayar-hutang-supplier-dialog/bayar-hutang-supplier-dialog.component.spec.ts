import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayarHutangSupplierDialogComponent } from './bayar-hutang-supplier-dialog.component';

describe('BayarHutangSupplierDialogComponent', () => {
  let component: BayarHutangSupplierDialogComponent;
  let fixture: ComponentFixture<BayarHutangSupplierDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayarHutangSupplierDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayarHutangSupplierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
