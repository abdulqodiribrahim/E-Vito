import { TestBed } from '@angular/core/testing';

import { PenjualanService } from './penjualan.service';

describe('PenjualanService', () => {
  let service: PenjualanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenjualanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
