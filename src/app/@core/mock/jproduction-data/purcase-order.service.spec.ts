import { TestBed } from '@angular/core/testing';

import { PurcaseOrderService } from './purcase-order.service';

describe('PurcaseOrderService', () => {
  let service: PurcaseOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurcaseOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
