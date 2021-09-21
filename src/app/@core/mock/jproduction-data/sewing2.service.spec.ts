import { TestBed } from '@angular/core/testing';

import { Sewing2Service } from './sewing2.service';

describe('Sewing2Service', () => {
  let service: Sewing2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sewing2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
