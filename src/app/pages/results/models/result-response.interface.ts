import { CalculationStatus } from "./calculation-status.interface";
import { ResultChartData } from "./result-chart-data.interface";

export interface ResultResponse {
  chartsData: ResultChartData[] | null;
  status: CalculationStatus;
}
