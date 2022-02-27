import { Component, Input, OnInit } from "@angular/core";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";

@Component({
  selector: "app-results-loading",
  templateUrl: "./results-loading.component.html",
  styleUrls: ["./results-loading.component.scss"],
})
export class ResultsLoadingComponent implements OnInit {
  @Input() value = 0;
  constructor() {}

  ngOnInit(): void {}
}
