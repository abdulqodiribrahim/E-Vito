import { TestBed } from '@angular/core/testing';

import { GudangService } from './gudang.service';

describe('GudangService', () => {
  let service: GudangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GudangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
