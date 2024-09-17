import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProfesionalComponent } from './aprofesional.component';

describe('AProfesionalComponent', () => {
  let component: AProfesionalComponent;
  let fixture: ComponentFixture<AProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AProfesionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
