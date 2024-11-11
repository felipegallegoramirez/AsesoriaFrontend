import { TestBed } from '@angular/core/testing';

import { AtprofesionalesService } from './atprofesionales.service';

describe('AtprofesionalesService', () => {
  let service: AtprofesionalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtprofesionalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
