import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { AuthService } from "./pages/auth/services";
import { catchError, filter, switchMap, take } from "rxjs/operators";
import { LoginResponse } from "./pages/auth/models/login-response";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  isTokenRefreshing: boolean = false;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(public authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      request.url.indexOf("refresh") !== -1 ||
      request.url.indexOf("login") !== -1
    ) {
      return next.handle(request);
    }
    const jwtToken = this.authService.getJwtToken();
    if (jwtToken) {
      return next.handle(this.addToken(request, jwtToken)).pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error.status === 403) {
            return this.handleAuthErrors(request, next);
          } else {
            return throwError(() => console.log(error));
          }
        })
      );
    }
    return next.handle(request);
  }

  private handleAuthErrors(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.isTokenRefreshing) {
      this.isTokenRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((refreshTokenResponse: LoginResponse) => {
          this.isTokenRefreshing = false;
          this.refreshTokenSubject.next(
            refreshTokenResponse.authenticationToken
          );
          return next.handle(
            this.addToken(request, refreshTokenResponse.authenticationToken)
          );
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((result) => result !== null),
        take(1),
        switchMap((res) => {
          return next.handle(
            this.addToken(request, this.authService.getJwtToken())
          );
        })
      );
    }
  }

  addToken(request: HttpRequest<any>, jwtToken: string) {
    return request.clone({
      headers: request.headers.set("Authorization", "Bearer " + jwtToken),
    });
  }
}
