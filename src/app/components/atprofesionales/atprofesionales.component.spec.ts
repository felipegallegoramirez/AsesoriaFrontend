import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATProfesionalesComponent } from './atprofesionales.component';

describe('ATProfesionalesComponent', () => {
  let component: ATProfesionalesComponent;
  let fixture: ComponentFixture<ATProfesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ATProfesionalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
