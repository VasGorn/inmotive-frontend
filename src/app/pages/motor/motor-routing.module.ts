import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MotorPageComponent } from "./containers/motor-page/motor-page.component";

const routes: Routes = [
  {
    path: "",
    component: MotorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorRoutingModule {}
