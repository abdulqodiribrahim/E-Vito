import { TestBed } from '@angular/core/testing';

import { Penjualan2Service } from './penjualan2.service';

describe('Penjualan2Service', () => {
  let service: Penjualan2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Penjualan2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
