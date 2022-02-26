import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorPageComponent } from './motor-page.component';

describe('MotorPageComponent', () => {
  let component: MotorPageComponent;
  let fixture: ComponentFixture<MotorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
