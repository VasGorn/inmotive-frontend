import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
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
import { colors } from "src/app/consts";
import { Point } from "../../models/point.interface";
import { ResultChartData } from "../../models/result-chart-data.interface";

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
  selector: "app-results-chart",
  templateUrl: "./results-chart.component.html",
  styleUrls: ["./results-chart.component.scss"],
})
export class ResultsChartComponent implements OnInit, OnChanges {
  @Input() chartsData: ResultChartData[];
  @Input() chartIndex: number = 0;
  public apexLineChartOptions: Partial<ChartOptions>;
  public colors: typeof colors = colors;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chartIndex) {
      this.initChart();
    }
  }

  ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    if (!this.chartsData) {
      return;
    }

    const xMax = this.chartsData[this.chartIndex].data.reduce(
      (previousValue: Point, currentValue: Point) => {
        return previousValue.x > currentValue.x ? previousValue : currentValue;
      }
    );
    const xaxisMax = 1.2 * xMax.x;
    const xaxisLabel = this.chartsData[this.chartIndex].xaxisName;

    const yMax = this.chartsData[this.chartIndex].data.reduce(
      (previousValue: Point, currentValue: Point) => {
        return previousValue.y > currentValue.y ? previousValue : currentValue;
      }
    );
    const yaxisMax = 1.2 * yMax.y;
    const yaxisLabel = this.chartsData[this.chartIndex].yaxisName;

    this.apexLineChartOptions = {
      series: [this.chartsData[this.chartIndex]],
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
          text: xaxisLabel,
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
          text: yaxisLabel,
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
