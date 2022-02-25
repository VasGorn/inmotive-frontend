import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveCoefficientFormComponent } from './drive-coefficient-form.component';

describe('DriveCoefficientFormComponent', () => {
  let component: DriveCoefficientFormComponent;
  let fixture: ComponentFixture<DriveCoefficientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveCoefficientFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveCoefficientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
