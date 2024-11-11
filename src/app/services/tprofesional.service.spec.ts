import { TestBed } from '@angular/core/testing';

import { TprofesionalService } from './tprofesional.service';

describe('TprofesionalService', () => {
  let service: TprofesionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TprofesionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
