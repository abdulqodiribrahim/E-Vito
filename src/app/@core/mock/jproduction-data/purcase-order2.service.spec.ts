import { TestBed } from '@angular/core/testing';

import { PurcaseOrder2Service } from './purcase-order2.service';

describe('PurcaseOrder2Service', () => {
  let service: PurcaseOrder2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurcaseOrder2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
