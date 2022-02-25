import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DrivePageComponent } from "./containers/drive-page/drive-page.component";

const routes: Routes = [
  {
    path: "",
    component: DrivePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriveRoutingModule {}
