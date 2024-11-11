import { TestBed } from '@angular/core/testing';

import { PerfilEgresoService } from './perfil-egreso.service';

describe('PerfilEgresoService', () => {
  let service: PerfilEgresoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilEgresoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
