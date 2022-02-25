import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatGridListModule } from "@angular/material/grid-list";

import { SharedModule } from "src/app/shared/shared.module";
import { NotificationModule } from "../notification/notification.module";
import { ProjectRoutingModule } from "./project-routing.module";
import { ProjectFormComponent } from "./components/project-form/project-form.component";
import { ProjectPageComponent } from "./containers/project-page/project-page.component";
import { ProjectTableComponent } from "./components/project-table/project-table.component";

@NgModule({
  declarations: [
    ProjectFormComponent,
    ProjectPageComponent,
    ProjectTableComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NotificationModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
  ],
})
export class ProjectsModule {}
