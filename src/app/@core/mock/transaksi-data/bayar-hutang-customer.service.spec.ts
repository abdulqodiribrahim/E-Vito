import { TestBed } from '@angular/core/testing';

import { BayarHutangCustomerService } from './bayar-hutang-customer.service';

describe('BayarHutangCustomerService', () => {
  let service: BayarHutangCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BayarHutangCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
