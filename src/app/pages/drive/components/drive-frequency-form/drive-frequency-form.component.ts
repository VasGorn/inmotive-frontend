import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-drive-frequency-form",
  templateUrl: "./drive-frequency-form.component.html",
  styleUrls: ["./drive-frequency-form.component.scss"],
})
export class DriveFrequencyFormComponent implements OnInit {
  breakpointColumn: number = 1;
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.breakpointColumn = window.innerWidth <= 700 ? 1 : 2;
    this.form = new FormGroup({
      frequencyForm: new FormControl("", Validators.required),
      frequencyTo: new FormControl("", Validators.required),
      initialFrequency: new FormControl("", Validators.required),
      incrementFrequency: new FormControl("", Validators.required),
      numGraphs: new FormControl("", Validators.required),
    });
  }

  onResize(event) {
    this.breakpointColumn = event.target.innerWidth <= 700 ? 1 : 2;
  }
}
