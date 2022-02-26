import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-geometry-form",
  templateUrl: "./geometry-form.component.html",
  styleUrls: ["./geometry-form.component.scss"],
})
export class GeometryFormComponent implements OnInit {
  breakpointColumn: number = 1;
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.breakpointColumn = window.innerWidth <= 700 ? 1 : 2;
    this.form = new FormGroup({
      rotorDiameter: new FormControl("", Validators.required),
      statorLength: new FormControl("", Validators.required),
      statorFrontendLength: new FormControl("", Validators.required),
      statorGrooveShape: new FormControl("", Validators.required),
      statorBevel: new FormControl("", Validators.required),
      busBar: new FormControl("", Validators.required),
    });
  }

  onResize(event) {
    this.breakpointColumn = event.target.innerWidth <= 700 ? 1 : 2;
  }
}
