import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NgApexchartsModule } from "ng-apexcharts";

import { ResultsRoutingModule } from "./results-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { NotificationModule } from "../notification/notification.module";
import { ResultsLoadingComponent } from "./components/results-loading/results-loading.component";
import { ResultsFormComponent } from "./components/results-form/results-form.component";
import { ResultsChartComponent } from "./components/results-chart/results-chart.component";
import { ResultsPageComponent } from "./containers/results-page/results-page.component";

@NgModule({
  declarations: [
    ResultsLoadingComponent,
    ResultsFormComponent,
    ResultsChartComponent,
    ResultsPageComponent,
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    NgApexchartsModule,
    SharedModule,
    NotificationModule,
  ],
})
export class ResultsModule {}
