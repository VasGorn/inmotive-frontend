import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { concat, throwError } from "rxjs";
import { NotificationService } from "src/app/pages/notification/services/notification.service";

import { ErrorResponse } from "src/app/shared/types/error-response.interface";
import { ResultChartData } from "../../models/result-chart-data.interface";
import { ResultResponse } from "../../models/result-response.interface";
import { ResultsService } from "../../services/results.service";

@Component({
  selector: "app-results-page",
  templateUrl: "./results-page.component.html",
  styleUrls: ["./results-page.component.scss"],
})
export class ResultsPageComponent implements OnInit, OnDestroy {
  public resultChartsData: ResultChartData[] = [];
  public selectedChartIndex: number = 0;
  public isRunning: boolean = true;
  public calculationProgress: number = 0;

  constructor(
    private service: ResultsService,
    private notification: NotificationService
  ) {
    const data: ResultChartData = {
      name: "no data",
      xaxisName: "no data",
      yaxisName: "no data",
      data: [{ x: 0, y: 0 }],
    };
    this.resultChartsData.push(data);
  }

  ngOnInit(): void {
    const projectId = 1;
    concat(
      this.service.runCalulation(projectId),
      this.service.startPolling(projectId)
    ).subscribe({
      next: (result: ResultResponse) => {
        if (result.status.progress >= 100) {
          this.resultChartsData = result.chartsData;
          this.service.stopPolling();
        }
        this.isRunning = result.status.running;
        this.calculationProgress = result.status.progress;
      },
      error: (error: HttpErrorResponse) => {
        this.handleApiError(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.service.stopPolling();
  }

  public chartChange($event: number) {
    this.selectedChartIndex = $event;
  }

  private handleApiError(httpError: HttpErrorResponse): void {
    const strApiError: string = httpError.error;
    const apiError: ErrorResponse = JSON.parse(strApiError);
    this.notification.showErrorToastr(apiError.message);
    console.error(apiError);
    throwError(() => apiError);
  }
}
