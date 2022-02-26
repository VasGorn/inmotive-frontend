import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatorSlotFormComponent } from './stator-slot-form.component';

describe('StatorSlotFormComponent', () => {
  let component: StatorSlotFormComponent;
  let fixture: ComponentFixture<StatorSlotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatorSlotFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatorSlotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
