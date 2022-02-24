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
import { AuthService } from "src/app/pages/auth/services";
import { Project } from "../../models/project";

@Component({
  selector: "app-project-form",
  templateUrl: "./project-form.component.html",
  styleUrls: ["./project-form.component.scss"],
  providers: [AuthService],
})
export class ProjectFormComponent implements OnChanges, OnInit {
  breakpointColumn: number = 1;
  public form: FormGroup;
  @Input() project: Project;
  @Output() saveProjectEvent = new EventEmitter<Project>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.project) {
      this.form.patchValue({
        name: this.project.name,
        description: this.project.description,
        supplyVoltage: this.project.supplyVoltage,
        supplyFrequency: this.project.supplyFrequency,
        maxSlip: this.project.maxSlip,
      });
    }
  }

  ngOnInit(): void {
    this.breakpointColumn = window.innerWidth <= 700 ? 1 : 2;
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      description: new FormControl(""),
      supplyVoltage: new FormControl(380, [Validators.required]),
      supplyFrequency: new FormControl(50, [Validators.required]),
      maxSlip: new FormControl("1.00", [
        Validators.required,
        Validators.min(0.2),
        Validators.max(1.0),
      ]),
    });
  }

  onResize(event) {
    this.breakpointColumn = event.target.innerWidth <= 700 ? 1 : 2;
  }

  saveProject() {
    if (this.form.valid) {
      const projectToSave: Project = {
        ...this.form.value,
        created: null,
      };
      this.saveProjectEvent.emit(projectToSave);
      this.form.patchValue({
        name: "",
        description: "",
        supplyVoltage: 380,
        supplyFrequency: 50,
        maxSlip: "1.00",
      });
    }
  }
}
