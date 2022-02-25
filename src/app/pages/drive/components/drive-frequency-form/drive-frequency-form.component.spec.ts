import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveFrequencyFormComponent } from './drive-frequency-form.component';

describe('DriveFrequencyFormComponent', () => {
  let component: DriveFrequencyFormComponent;
  let fixture: ComponentFixture<DriveFrequencyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveFrequencyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveFrequencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
