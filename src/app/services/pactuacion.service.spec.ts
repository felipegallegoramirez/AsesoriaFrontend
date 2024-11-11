import { TestBed } from '@angular/core/testing';

import { PactuacionService } from './pactuacion.service';

describe('PactuacionService', () => {
  let service: PactuacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PactuacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
