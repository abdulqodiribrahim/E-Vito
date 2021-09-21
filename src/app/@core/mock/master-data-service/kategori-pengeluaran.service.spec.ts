import { TestBed } from '@angular/core/testing';

import { KategoriPengeluaranService } from './kategori-pengeluaran.service';

describe('KategoriPengeluaranService', () => {
  let service: KategoriPengeluaranService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KategoriPengeluaranService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
