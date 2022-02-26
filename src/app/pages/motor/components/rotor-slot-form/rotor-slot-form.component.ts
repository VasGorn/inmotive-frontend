import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-rotor-slot-form",
  templateUrl: "./rotor-slot-form.component.html",
  styleUrls: ["./rotor-slot-form.component.scss"],
})
export class RotorSlotFormComponent implements OnInit {
  breakpointColumn: number = 1;
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.breakpointColumn = window.innerWidth <= 700 ? 1 : 2;
    this.form = new FormGroup({
      D0: new FormControl("", Validators.required),
      rotorDiameterFirstCircle: new FormControl("", Validators.required),
      rotorDiameterSecondCircle: new FormControl("", Validators.required),
      distanseSurfaceToFirstCircle: new FormControl("", Validators.required),
      A1: new FormControl("", Validators.required),
      distanceBetweenTwoCircles: new FormControl("", Validators.required),
      GR: new FormControl("", Validators.required),
      rotorSlotWidth: new FormControl("", Validators.required),
      rotorJumberHeight: new FormControl("", Validators.required),
      typeRotorSlot: new FormControl("2", Validators.required),
    });
  }

  public changeTypeOfRotorSlot($event) {
    const rotorType: number = parseInt($event.value);

    this.form.get("D0").enable();
    this.form.get("A1").enable();
    this.form.get("GR").enable();
    this.form.get("rotorJumberHeight").enable();

    switch (rotorType) {
      case 1: {
        break;
      }
      case 2: {
        this.form.get("D0").disable();
        this.form.get("A1").disable();
        this.form.get("GR").disable();
        break;
      }
      case 3: {
        this.form.get("D0").disable();
        this.form.get("A1").disable();
        this.form.get("GR").disable();
        this.form.get("rotorJumberHeight").disable();
        break;
      }
      case 4: {
        this.form.get("GR").disable();
        break;
      }
      default: {
        console.error("Wrong type of the rotor slot!");
        break;
      }
    }
  }

  public onResize(event) {
    this.breakpointColumn = event.target.innerWidth <= 700 ? 1 : 2;
  }
}
