import { TestBed } from '@angular/core/testing';

import { ReturPenjualan2Service } from './retur-penjualan2.service';

describe('ReturPenjualan2Service', () => {
  let service: ReturPenjualan2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturPenjualan2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
