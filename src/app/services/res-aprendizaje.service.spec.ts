import { TestBed } from '@angular/core/testing';

import { ResAprendizajeService } from './res-aprendizaje.service';

describe('ResAprendizajeService', () => {
  let service: ResAprendizajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResAprendizajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
