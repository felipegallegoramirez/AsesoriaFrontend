import { TestBed } from '@angular/core/testing';

import { EstMesocurricularService } from './est-mesocurricular.service';

describe('EstMesocurricularService', () => {
  let service: EstMesocurricularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstMesocurricularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
