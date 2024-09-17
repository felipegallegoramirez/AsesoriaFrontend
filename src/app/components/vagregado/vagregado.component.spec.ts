import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAgregadoComponent } from './vagregado.component';

describe('VAgregadoComponent', () => {
  let component: VAgregadoComponent;
  let fixture: ComponentFixture<VAgregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VAgregadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VAgregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
