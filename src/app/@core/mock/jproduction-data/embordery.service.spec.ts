import { TestBed } from '@angular/core/testing';

import { EmborderyService } from './embordery.service';

describe('EmborderyService', () => {
  let service: EmborderyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmborderyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
