import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-drive-speed-control-form",
  templateUrl: "./drive-speed-control-form.component.html",
  styleUrls: ["./drive-speed-control-form.component.scss"],
})
export class DriveSpeedControlFormComponent implements OnInit {
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      speedControleType: new FormControl("1", Validators.required),
    });
  }
}
