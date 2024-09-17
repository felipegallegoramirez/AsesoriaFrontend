import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResAprendizajeComponent } from './res-aprendizaje.component';

describe('ResAprendizajeComponent', () => {
  let component: ResAprendizajeComponent;
  let fixture: ComponentFixture<ResAprendizajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResAprendizajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResAprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
