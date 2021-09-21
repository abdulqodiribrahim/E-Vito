import { TestBed } from '@angular/core/testing';

import { StockOpname2Service } from './stock-opname2.service';

describe('StockOpname2Service', () => {
  let service: StockOpname2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockOpname2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
