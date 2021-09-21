import { TestBed } from '@angular/core/testing';

import { Finishing3Service } from './finishing3.service';

describe('Finishing3Service', () => {
  let service: Finishing3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Finishing3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
