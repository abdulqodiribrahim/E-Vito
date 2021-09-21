import { TestBed } from '@angular/core/testing';

import { BayarHutangSupplier2Service } from './bayar-hutang-supplier2.service';

describe('BayarHutangSupplier2Service', () => {
  let service: BayarHutangSupplier2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BayarHutangSupplier2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
