import { TestBed } from '@angular/core/testing';

import { AcRetroalService } from './ac-retroal.service';

describe('AcRetroalService', () => {
  let service: AcRetroalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcRetroalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
