import { TestBed } from '@angular/core/testing';

import { Cutting2Service } from './cutting2.service';

describe('Cutting2Service', () => {
  let service: Cutting2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cutting2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
