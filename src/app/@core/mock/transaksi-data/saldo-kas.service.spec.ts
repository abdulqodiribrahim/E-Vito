import { TestBed } from '@angular/core/testing';

import { SaldoKasService } from './saldo-kas.service';

describe('SaldoKasService', () => {
  let service: SaldoKasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaldoKasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
