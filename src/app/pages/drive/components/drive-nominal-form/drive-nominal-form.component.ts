import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-drive-nominal-form",
  templateUrl: "./drive-nominal-form.component.html",
  styleUrls: ["./drive-nominal-form.component.scss"],
})
export class DriveNominalFormComponent implements OnInit {
  breakpointColumn: number = 1;
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.breakpointColumn = window.innerWidth <= 700 ? 1 : 2;
    this.form = new FormGroup({
      ratedPower: new FormControl("", Validators.required),
      efficiency: new FormControl("", Validators.required),
      maxVoltage: new FormControl("", Validators.required),
      ratedFrequency: new FormControl("", Validators.required),
      switchFrequency: new FormControl("", Validators.required),
      frequencyRate: new FormControl("", Validators.required),
    });
  }

  onResize(event) {
    this.breakpointColumn = event.target.innerWidth <= 700 ? 1 : 2;
  }
}
