import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { timeout } from "rxjs/operators";
import { NotificationService } from "src/app/pages/notification/notification.service";
import { ErrorResponse } from "src/app/shared/types/error-response.interface";
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";

@Component({
  selector: "app-project-page",
  templateUrl: "./project-page.component.html",
  styleUrls: ["./project-page.component.scss"],
})
export class ProjectPageComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project;

  constructor(
    private projectService: ProjectService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.projectService.getAll().subscribe({
      next: (projects: Project[]) => {
        this.projects = projects;
        this.projectService.projectsSubject$.next(projects);
      },
      error: (error: HttpErrorResponse) => {
        this.handleApiError(error);
      },
    });
  }

  public saveProject(project: Project) {
    this.projectService.save(project).subscribe({
      next: (project: Project) => {
        this.projects = [...this.projects, project];
        this.projectService.projectsSubject$.next(this.projects);
      },
      error: (error: HttpErrorResponse) => {
        this.handleApiError(error);
      },
    });
  }

  public selectProject(project: Project) {
    this.projectService.projectSubject$.next(project);
    this.selectedProject = project;
  }

  public deleteProject(project: Project) {
    const id = project.id;
    this.projectService.delete(id).subscribe({
      next: () => {
        this.projects = this.projects.filter((project: Project) => {
          return id !== project.id;
        });
        this.projectService.projectsSubject$.next(this.projects);
        this.projectService.projectSubject$.next(null);
      },
      error: (error: HttpErrorResponse) => {
        this.handleApiError(error);
      },
    });
  }

  private handleApiError(httpError: HttpErrorResponse): void {
    const strApiError: string = httpError.error;
    const apiError: ErrorResponse = JSON.parse(strApiError);
    this.notification.showErrorToastr(apiError.message);
    console.error(apiError);
    throwError(() => apiError);
  }
}
