import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndImpactoComponent } from './ind-impacto.component';

describe('IndImpactoComponent', () => {
  let component: IndImpactoComponent;
  let fixture: ComponentFixture<IndImpactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndImpactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndImpactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
