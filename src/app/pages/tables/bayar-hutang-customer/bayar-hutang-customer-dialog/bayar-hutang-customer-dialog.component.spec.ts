import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayarHutangCustomerDialogComponent } from './bayar-hutang-customer-dialog.component';

describe('BayarHutangCustomerDialogComponent', () => {
  let component: BayarHutangCustomerDialogComponent;
  let fixture: ComponentFixture<BayarHutangCustomerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayarHutangCustomerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayarHutangCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
