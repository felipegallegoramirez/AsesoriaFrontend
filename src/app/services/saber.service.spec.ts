import { TestBed } from '@angular/core/testing';

import { SaberService } from './saber.service';

describe('SaberService', () => {
  let service: SaberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
