import { TestBed } from '@angular/core/testing';

import { Finishing2Service } from './finishing2.service';

describe('Finishing2Service', () => {
  let service: Finishing2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Finishing2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
