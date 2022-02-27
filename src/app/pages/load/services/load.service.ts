import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { LoadChartData } from "../models/load-chart-data";

@Injectable({
  providedIn: "root",
})
export class LoadService {
  constructor(private http: HttpClient) {}

  public saveLoad() {
    throw new Error("TODO: post request to save load in project");
  }
}
