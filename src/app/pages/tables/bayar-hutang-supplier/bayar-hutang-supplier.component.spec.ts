import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayarHutangSupplierComponent } from './bayar-hutang-supplier.component';

describe('BayarHutangSupplierComponent', () => {
  let component: BayarHutangSupplierComponent;
  let fixture: ComponentFixture<BayarHutangSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayarHutangSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayarHutangSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
