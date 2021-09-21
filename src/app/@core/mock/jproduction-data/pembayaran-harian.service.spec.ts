import { TestBed } from '@angular/core/testing';

import { PembayaranHarianService } from './pembayaran-harian.service';

describe('PembayaranHarianService', () => {
  let service: PembayaranHarianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PembayaranHarianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
