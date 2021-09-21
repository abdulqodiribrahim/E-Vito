import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayarHutangCustomerComponent } from './bayar-hutang-customer.component';

describe('BayarHutangCustomerComponent', () => {
  let component: BayarHutangCustomerComponent;
  let fixture: ComponentFixture<BayarHutangCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayarHutangCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayarHutangCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
