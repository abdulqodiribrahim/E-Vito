import { TestBed } from '@angular/core/testing';

import { ReturPembelian2Service } from './retur-pembelian2.service';

describe('ReturPembelian2Service', () => {
  let service: ReturPembelian2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturPembelian2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
