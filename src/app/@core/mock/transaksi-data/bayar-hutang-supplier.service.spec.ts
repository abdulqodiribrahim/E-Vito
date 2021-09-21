import { TestBed } from '@angular/core/testing';

import { BayarHutangSupplierService } from './bayar-hutang-supplier.service';

describe('BayarHutangSupplierService', () => {
  let service: BayarHutangSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BayarHutangSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
