import { TestBed } from '@angular/core/testing';

import { GolonganService } from './golongan.service';

describe('GolonganService', () => {
  let service: GolonganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GolonganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
