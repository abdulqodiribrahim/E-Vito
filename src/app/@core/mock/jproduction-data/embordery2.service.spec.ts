import { TestBed } from '@angular/core/testing';

import { Embordery2Service } from './embordery2.service';

describe('Embordery2Service', () => {
  let service: Embordery2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Embordery2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
