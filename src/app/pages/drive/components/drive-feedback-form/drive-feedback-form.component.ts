import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-drive-feedback-form",
  templateUrl: "./drive-feedback-form.component.html",
  styleUrls: ["./drive-feedback-form.component.scss"],
})
export class DriveFeedbackFormComponent implements OnInit {
  typeFeedback = new FormControl("0");

  constructor() {}

  ngOnInit(): void {}
}
