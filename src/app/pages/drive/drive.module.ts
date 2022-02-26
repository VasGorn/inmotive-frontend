import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";

import { DriveRoutingModule } from "./drive-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { NotificationModule } from "../notification/notification.module";
import { DriveNominalFormComponent } from "./components/drive-nominal-form/drive-nominal-form.component";
import { DriveCoefficientFormComponent } from "./components/drive-coefficient-form/drive-coefficient-form.component";
import { DriveFrequencyFormComponent } from "./components/drive-frequency-form/drive-frequency-form.component";
import { DriveFeedbackFormComponent } from "./components/drive-feedback-form/drive-feedback-form.component";
import { DriveSpeedControlFormComponent } from "./components/drive-speed-control-form/drive-speed-control-form.component";
import { DrivePageComponent } from "./containers/drive-page/drive-page.component";

@NgModule({
  declarations: [
    DriveNominalFormComponent,
    DriveCoefficientFormComponent,
    DriveFrequencyFormComponent,
    DriveFeedbackFormComponent,
    DriveSpeedControlFormComponent,
    DrivePageComponent,
  ],
  imports: [
    CommonModule,
    DriveRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    SharedModule,
    NotificationModule,
  ],
})
export class DriveModule {}
