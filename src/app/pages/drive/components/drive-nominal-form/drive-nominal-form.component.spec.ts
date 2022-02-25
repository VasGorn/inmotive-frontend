import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DriveNominalFormComponent } from "./drive-nominal-form.component";

describe("DriveFormComponent", () => {
  let component: DriveNominalFormComponent;
  let fixture: ComponentFixture<DriveNominalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriveNominalFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveNominalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
