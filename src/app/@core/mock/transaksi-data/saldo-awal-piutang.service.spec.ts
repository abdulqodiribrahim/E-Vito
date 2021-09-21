import { TestBed } from '@angular/core/testing';

import { SaldoAwalPiutangService } from './saldo-awal-piutang.service';

describe('SaldoAwalPiutangService', () => {
  let service: SaldoAwalPiutangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaldoAwalPiutangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
