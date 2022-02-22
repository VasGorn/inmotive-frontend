import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";
import { Project } from "src/app/pages/projects/models/project";
import { ProjectService } from "src/app/pages/projects/services/project.service";

@Component({
  selector: "app-select-project",
  templateUrl: "./select-project.component.html",
  styleUrls: ["./select-project.component.scss"],
})
export class SelectProjectComponent implements OnInit, OnChanges {
  @Input() projects: Project[];
  @Input() project: Project;
  @Output() selectProjectEvent: EventEmitter<Project> = new EventEmitter();
  form: FormGroup;

  constructor(private projectService: ProjectService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.project === null || this.projects === null) {
      return;
    }

    if (this.project === undefined || this.projects === undefined) {
      return;
    }

    const isProjectInArray = this.projects.some(
      (p: Project) => p.id === this.project.id
    );
    if (isProjectInArray) {
      this.form?.get("project").setValue(this.project?.id);
      return;
    }
    if (this.projects.length >= 5) {
      this.projects.pop();
      this.projects.push(this.project);
      this.form?.get("project").setValue(this.project?.id);
      return;
    }
    this.projects.push(this.project);
    this.form?.get("project").setValue(this.project?.id);
  }

  ngOnInit() {
    this.form = new FormGroup({
      project: new FormControl(null, Validators.required),
    });
    this.form?.get("project").setValue(this.project?.id);
  }

  public onChange($event: MatSelectChange) {
    const selectedProject = this.projects.find(
      (p: Project) => $event.value === p.id
    );
    this.selectProjectEvent.emit(selectedProject);
  }
}
