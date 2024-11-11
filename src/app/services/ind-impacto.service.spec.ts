import { TestBed } from '@angular/core/testing';

import { IndImpactoService } from './ind-impacto.service';

describe('IndImpactoService', () => {
  let service: IndImpactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndImpactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
