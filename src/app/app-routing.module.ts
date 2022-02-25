import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./pages/auth/guards/auth.guard";
import { ProjectPageComponent } from "./pages/projects/containers/project-page/project-page.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

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
