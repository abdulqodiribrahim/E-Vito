import { TestBed } from '@angular/core/testing';

import { MutasiBarangService } from './mutasi-barang.service';

describe('MutasiBarangService', () => {
  let service: MutasiBarangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutasiBarangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
