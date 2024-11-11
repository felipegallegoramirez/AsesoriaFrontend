import { TestBed } from '@angular/core/testing';

import { VagregadoService } from './vagregado.service';

describe('VagregadoService', () => {
  let service: VagregadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VagregadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
