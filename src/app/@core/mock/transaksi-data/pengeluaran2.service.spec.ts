import { TestBed } from '@angular/core/testing';

import { Pengeluaran2Service } from './pengeluaran2.service';

describe('Pengeluaran2Service', () => {
  let service: Pengeluaran2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pengeluaran2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
