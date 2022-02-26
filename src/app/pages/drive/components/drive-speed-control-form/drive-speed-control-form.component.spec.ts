import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveSpeedControlFormComponent } from './drive-speed-control-form.component';

describe('DriveSpeedControlFormComponent', () => {
  let component: DriveSpeedControlFormComponent;
  let fixture: ComponentFixture<DriveSpeedControlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveSpeedControlFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveSpeedControlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
