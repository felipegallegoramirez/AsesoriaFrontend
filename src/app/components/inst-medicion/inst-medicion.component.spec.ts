import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstMedicionComponent } from './inst-medicion.component';

describe('InstMedicionComponent', () => {
  let component: InstMedicionComponent;
  let fixture: ComponentFixture<InstMedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstMedicionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstMedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
