import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEgresoComponent } from './perfil-egreso.component';

describe('PerfilEgresoComponent', () => {
  let component: PerfilEgresoComponent;
  let fixture: ComponentFixture<PerfilEgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilEgresoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
