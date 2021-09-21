import { TestBed } from '@angular/core/testing';

import { SewingService } from './sewing.service';

describe('SewingService', () => {
  let service: SewingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SewingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
