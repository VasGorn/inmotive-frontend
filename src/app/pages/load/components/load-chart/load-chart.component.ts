import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from "ng-apexcharts";
import { BehaviorSubject } from "rxjs";
import { colors } from "src/app/consts";
import { LoadChartData } from "../../models/load-chart-data";
import { Point } from "../../models/point.interface";

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: ApexMarkers;
  labels: string[];
  responsive: ApexResponsive[];
  fill: ApexFill;
};

@Component({
  selector: "app-load-chart",
  templateUrl: "./load-chart.component.html",
  styleUrls: ["./load-chart.component.scss"],
})
export class LoadChartComponent implements OnInit, OnDestroy {
  @Input() loadChartData$: BehaviorSubject<LoadChartData>;
  private chartData: LoadChartData;
  public apexLineChartOptions: Partial<ChartOptions>;
  public colors: typeof colors = colors;

  constructor() {}

  public ngOnInit(): void {
    this.loadChartData$.subscribe((chartData: LoadChartData) => {
      this.chartData = chartData;
      this.initChart();
    });
  }

  ngOnDestroy(): void {
    this.loadChartData$.unsubscribe();
  }

  public initChart(): void {
    const xMax = this.chartData.data.reduce(
      (previousValue: Point, currentValue: Point) => {
        return previousValue.x > currentValue.x ? previousValue : currentValue;
      }
    );
    const xaxisMax = 1.2 * xMax.x;

    const yMax = this.chartData.data.reduce(
      (previousValue: Point, currentValue: Point) => {
        return previousValue.y > currentValue.y ? previousValue : currentValue;
      }
    );
    const yaxisMax = 1.2 * xMax.y;

    this.apexLineChartOptions = {
      series: [this.chartData],
      chart: {
        zoom: {
          enabled: false,
        },
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: [colors.PINK],
      stroke: {
        curve: "straight",
        width: 3,
      },
      xaxis: {
        type: "numeric",
        title: {
          text: "Torque, N•m",
        },
        min: 0,
        max: xaxisMax,
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        axisBorder: {
          show: true,
          strokeWidth: 1,
          color: "#78909C",
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "#78909C",
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },
      },
      yaxis: {
        min: 0,
        max: yaxisMax,
        title: {
          text: "Speed, rpm",
        },
        axisBorder: {
          show: true,
          color: "#78909C",
          width: 1,
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          color: "#78909C",
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
      },
      grid: {
        show: true,
        borderColor: "#78909C",
        strokeDashArray: 2,
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
    };
  }
}
