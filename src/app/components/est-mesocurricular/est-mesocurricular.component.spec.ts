import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstMesocurricularComponent } from './est-mesocurricular.component';

describe('EstMesocurricularComponent', () => {
  let component: EstMesocurricularComponent;
  let fixture: ComponentFixture<EstMesocurricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstMesocurricularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstMesocurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
