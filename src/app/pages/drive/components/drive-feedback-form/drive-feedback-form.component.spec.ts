import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveFeedbackFormComponent } from './drive-feedback-form.component';

describe('DriveFeedbackFormComponent', () => {
  let component: DriveFeedbackFormComponent;
  let fixture: ComponentFixture<DriveFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveFeedbackFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
