import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { TokenInterceptor } from "./token.interceptor";
import { AuthModule } from "./pages/auth/auth.module";
import { ProjectsModule } from "./pages/projects/projects.module";
import { ProjectService } from "./pages/projects/services/project.service";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { DriveModule } from "./pages/drive/drive.module";
import { MotorModule } from "./pages/motor/motor.module";
import { LoadModule } from "./pages/load/load.module";

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    SharedModule,
    AuthModule,
    ProjectsModule,
    DriveModule,
    MotorModule,
    LoadModule,
  ],
  providers: [
    ProjectService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
