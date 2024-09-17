import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PActuacionComponent } from './pactuacion.component';

describe('PActuacionComponent', () => {
  let component: PActuacionComponent;
  let fixture: ComponentFixture<PActuacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PActuacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PActuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
