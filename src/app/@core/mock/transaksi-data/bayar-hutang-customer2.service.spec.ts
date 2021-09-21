import { TestBed } from '@angular/core/testing';

import { BayarHutangCustomer2Service } from './bayar-hutang-customer2.service';

describe('BayarHutangCustomer2Service', () => {
  let service: BayarHutangCustomer2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BayarHutangCustomer2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
