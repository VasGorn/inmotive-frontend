import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../../../pages/auth/services";
import { routes } from "../../../../consts";
import { HttpErrorResponse } from "@angular/common/http";
import { Subscription, throwError } from "rxjs";
import { NotificationService } from "src/app/pages/notification/services/notification.service";
import { ProjectService } from "src/app/pages/projects/services/project.service";
import { Project } from "src/app/pages/projects/models/project";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public routers: typeof routes = routes;
  public clicked: boolean = false;
  public firstFiveProjects: Project[] = [];
  public selectedProject: Project;

  private projectsSub: Subscription;
  private projectSub: Subscription;

  constructor(
    private authService: AuthService,
    private notification: NotificationService,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectsSub = this.projectService.projectsSubject$.subscribe(
      (projects: Project[]) => {
        let projectsCopy = [...projects];
        this.firstFiveProjects =
          this.sortByDateAndReturnFiveElements(projectsCopy);
      }
    );
    this.projectSub = this.projectService.projectSubject$.subscribe(
      (project: Project) => {
        this.selectedProject = project;
      }
    );
  }

  ngOnDestroy(): void {
    this.projectsSub.unsubscribe();
    this.projectSub.unsubscribe();
  }

  public selectProject($event: Project) {
    this.projectService.projectSubject$.next($event);
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public logout(): void {
    this.authService.logout().subscribe({
      next: (data: string) => {
        this.notification.showInfoToastr(data);
        console.log(data);
        this.router.navigateByUrl(this.routers.LOGIN);
      },
      error: (error: HttpErrorResponse) => {
        this.notification.showErrorToastr(error.message);
        throwError(() => console.log(error.message));
      },
    });
  }

  private sortByDateAndReturnFiveElements(projects: Project[]): Project[] {
    if (projects.length < 5) {
      return projects.sort((a: Project, b: Project) => {
        return a.created < b.created ? 1 : -1;
      });
    }
    return projects
      .sort((a: Project, b: Project) => {
        return a.created < b.created ? 1 : -1;
      })
      .splice(0, 5);
  }
}
