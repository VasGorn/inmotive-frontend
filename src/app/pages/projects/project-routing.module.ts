import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectPageComponent } from "./containers/project-page/project-page.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
