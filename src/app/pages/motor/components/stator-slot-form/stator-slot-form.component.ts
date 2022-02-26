import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-stator-slot-form",
  templateUrl: "./stator-slot-form.component.html",
  styleUrls: ["./stator-slot-form.component.scss"],
})
export class StatorSlotFormComponent implements OnInit {
  breakpointColumn: number = 1;
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.breakpointColumn = window.innerWidth <= 700 ? 1 : 2;
    this.form = new FormGroup({
      heightStatorGroove: new FormControl("", Validators.required),
      heightWedgeStator: new FormControl("", Validators.required),
      slotWidth: new FormControl("", Validators.required),
      widthStatorGroove: new FormControl("", Validators.required),
      slotGrooveHeight: new FormControl("", Validators.required),
    });
  }

  onResize(event) {
    this.breakpointColumn = event.target.innerWidth <= 700 ? 1 : 2;
  }
}
