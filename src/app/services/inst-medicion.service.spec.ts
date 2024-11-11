import { TestBed } from '@angular/core/testing';

import { InstMedicionService } from './inst-medicion.service';

describe('InstMedicionService', () => {
  let service: InstMedicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstMedicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
