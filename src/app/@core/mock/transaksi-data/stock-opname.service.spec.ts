import { TestBed } from '@angular/core/testing';

import { StockOpnameService } from './stock-opname.service';

describe('StockOpnameService', () => {
  let service: StockOpnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockOpnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
