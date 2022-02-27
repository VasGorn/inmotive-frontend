import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

import { LoadRoutingModule } from "./load-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { NotificationModule } from "../notification/notification.module";
import { LoadFormComponent } from "./components/load-form/load-form.component";
import { LoadChartComponent } from "./components/load-chart/load-chart.component";
import { LoadPageComponent } from "./containers/load-page/load-page.component";

@NgModule({
  declarations: [LoadFormComponent, LoadChartComponent, LoadPageComponent],
  imports: [
    CommonModule,
    LoadRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    SharedModule,
    NotificationModule,
  ],
  providers: [],
})
export class LoadModule {}
