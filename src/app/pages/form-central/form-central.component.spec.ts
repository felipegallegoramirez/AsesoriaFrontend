import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCentralComponent } from './form-central.component';

describe('FormCentralComponent', () => {
  let component: FormCentralComponent;
  let fixture: ComponentFixture<FormCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCentralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
