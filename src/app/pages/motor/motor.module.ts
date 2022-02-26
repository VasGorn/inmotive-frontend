import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";

import { MotorRoutingModule } from "./motor-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { NotificationModule } from "../notification/notification.module";
import { GeometryFormComponent } from "./components/geometry-form/geometry-form.component";
import { StatorSlotFormComponent } from "./components/stator-slot-form/stator-slot-form.component";
import { RotorSlotFormComponent } from "./components/rotor-slot-form/rotor-slot-form.component";
import { MotorPageComponent } from "./containers/motor-page/motor-page.component";

@NgModule({
  declarations: [
    GeometryFormComponent,
    StatorSlotFormComponent,
    RotorSlotFormComponent,
    MotorPageComponent,
  ],
  imports: [
    CommonModule,
    MotorRoutingModule,
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
    MatTabsModule,
    MatIconModule,
    SharedModule,
    NotificationModule,
  ],
})
export class MotorModule {}
