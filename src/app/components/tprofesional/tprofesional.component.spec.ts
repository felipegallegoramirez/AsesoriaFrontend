import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TProfesionalComponent } from './tprofesional.component';

describe('TProfesionalComponent', () => {
  let component: TProfesionalComponent;
  let fixture: ComponentFixture<TProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TProfesionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
