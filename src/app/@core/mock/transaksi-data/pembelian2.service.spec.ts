import { TestBed } from '@angular/core/testing';

import { Pembelian2Service } from './pembelian2.service';

describe('Pembelian2Service', () => {
  let service: Pembelian2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pembelian2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
