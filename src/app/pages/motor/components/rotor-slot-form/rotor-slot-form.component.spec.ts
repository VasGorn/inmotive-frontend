import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotorSlotFormComponent } from './rotor-slot-form.component';

describe('RotorSlotFormComponent', () => {
  let component: RotorSlotFormComponent;
  let fixture: ComponentFixture<RotorSlotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotorSlotFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotorSlotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
