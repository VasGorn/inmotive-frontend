import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Observable, of, Subject, timer } from "rxjs";
import { retry, share, switchMap, takeUntil } from "rxjs/operators";
import { environment as env } from "src/environments/environment";
import { ResultResponse } from "../models/result-response.interface";

@Injectable({
  providedIn: "root",
})
export class ResultsService implements OnDestroy {
  private resultResponse$: Observable<ResultResponse>;
  private stop = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  public runCalulation(projectId: number): Observable<ResultResponse> {
    return this.http.get<ResultResponse>(
      `${env.BASE_URL}/calculation/run/${projectId}`
    );
  }

  public startPolling(projectId: number): Observable<ResultResponse> {
    this.resultResponse$ = timer(1, 739).pipe(
      switchMap(() =>
        this.http.get<ResultResponse>(
          `${env.BASE_URL}/calculation/status/${projectId}`
        )
      ),
      retry(5),
      share(),
      takeUntil(this.stop)
    );

    return this.resultResponse$;
  }

  public stopPolling(): void {
    this.stop.next(true);
  }

  ngOnDestroy(): void {
    this.stop.next(true);
  }
}
