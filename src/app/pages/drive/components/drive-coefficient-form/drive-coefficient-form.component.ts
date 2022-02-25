import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-drive-coefficient-form",
  templateUrl: "./drive-coefficient-form.component.html",
  styleUrls: ["./drive-coefficient-form.component.scss"],
})
export class DriveCoefficientFormComponent implements OnInit {
  breakpointColumn: number = 1;
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.breakpointColumn = window.innerWidth <= 700 ? 1 : 2;
    this.form = new FormGroup({
      coefRectifier: new FormControl("", Validators.required),
      coefInverter: new FormControl("", Validators.required),
      coefDC: new FormControl("", Validators.required),
    });
  }

  onResize(event) {
    this.breakpointColumn = event.target.innerWidth <= 700 ? 1 : 2;
  }
}
