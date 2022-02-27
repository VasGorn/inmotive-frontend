import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LoadChartData } from "../../models/load-chart-data";
import { LoadService } from "../../services/load.service";

@Component({
  selector: "app-load-page",
  templateUrl: "./load-page.component.html",
  styleUrls: ["./load-page.component.scss"],
})
export class LoadPageComponent implements OnInit {
  public loadChartData$: BehaviorSubject<LoadChartData>;

  private MAX_SPEED_RPM: number = 5000;
  private MIN_SPEED_RPM: number = 0;

  constructor(private service: LoadService) {
    const chardData: LoadChartData = {
      name: "load characteristic",
      data: [
        { x: 15, y: 0 },
        { x: 15, y: 5000 },
      ],
    };

    this.loadChartData$ = new BehaviorSubject<LoadChartData>(chardData);
  }

  ngOnInit(): void {}

  public loadChange(torque: number) {
    const chardData: LoadChartData = {
      name: "load characteristic",
      data: [
        { x: torque, y: this.MIN_SPEED_RPM },
        { x: torque, y: this.MAX_SPEED_RPM },
      ],
    };
    this.loadChartData$.next(chardData);
  }

  public acceptLoad(str: string) {
    console.error(str);
    this.service.saveLoad();
  }
}
