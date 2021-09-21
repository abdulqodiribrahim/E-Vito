import { TestBed } from '@angular/core/testing';

import { SatuanService } from './satuan.service';

describe('SatuanService', () => {
  let service: SatuanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatuanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
