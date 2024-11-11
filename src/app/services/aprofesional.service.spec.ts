import { TestBed } from '@angular/core/testing';

import { AprofesionalService } from './aprofesional.service';

describe('AprofesionalService', () => {
  let service: AprofesionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprofesionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
