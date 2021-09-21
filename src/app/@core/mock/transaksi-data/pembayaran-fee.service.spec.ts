import { TestBed } from '@angular/core/testing';

import { PembayaranFeeService } from './pembayaran-fee.service';

describe('PembayaranFeeService', () => {
  let service: PembayaranFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PembayaranFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
