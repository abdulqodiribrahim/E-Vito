import { TestBed } from '@angular/core/testing';

import { ReturPenjualanService } from './retur-penjualan.service';

describe('ReturPenjualanService', () => {
  let service: ReturPenjualanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturPenjualanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
