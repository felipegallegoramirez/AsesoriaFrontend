import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRetroalComponent } from './ac-retroal.component';

describe('AcRetroalComponent', () => {
  let component: AcRetroalComponent;
  let fixture: ComponentFixture<AcRetroalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcRetroalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRetroalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
