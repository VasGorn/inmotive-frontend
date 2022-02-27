import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";
import { ResultChartData } from "../../models/result-chart-data.interface";

@Component({
  selector: "app-results-form",
  templateUrl: "./results-form.component.html",
  styleUrls: ["./results-form.component.scss"],
})
export class ResultsFormComponent implements OnInit {
  @Input() chartsData: ResultChartData[];
  @Output() chartIndexEvent: EventEmitter<number> = new EventEmitter<number>();
  breakpointColumn: number = 1;
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.breakpointColumn = window.innerWidth <= 700 ? 1 : 2;
    this.form = new FormGroup({
      result: new FormControl(0, Validators.required),
    });
  }

  public onResize(event) {
    this.breakpointColumn = event.target.innerWidth <= 700 ? 1 : 2;
  }

  public onChange($event: MatSelectChange) {
    this.chartIndexEvent.emit($event.value);
  }
}
