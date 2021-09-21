import { TestBed } from '@angular/core/testing';

import { MutasiBarang2Service } from './mutasi-barang2.service';

describe('MutasiBarang2Service', () => {
  let service: MutasiBarang2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutasiBarang2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
