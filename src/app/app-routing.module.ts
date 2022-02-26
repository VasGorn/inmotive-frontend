import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./pages/auth/guards/auth.guard";
import { ProjectPageComponent } from "./pages/projects/containers/project-page/project-page.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { DrivePageComponent } from "./pages/drive/containers/drive-page/drive-page.component";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "projects",
  },
  {
    path: "404",
    component: NotFoundComponent,
  },
  {
    path: "projects",
    pathMatch: "full",
    canActivate: [AuthGuard],
    component: ProjectPageComponent,
    loadChildren: () =>
      import("./pages/projects/projects.module").then((m) => m.ProjectsModule),
  },
  {
    path: "drive",
    pathMatch: "full",
    canActivate: [AuthGuard],
    component: DrivePageComponent,
    loadChildren: () =>
      import("./pages/drive/drive.module").then((m) => m.DriveModule),
  },
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
