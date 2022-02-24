import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Project } from "../../models/project";

@Component({
  selector: "app-project-table",
  templateUrl: "./project-table.component.html",
  styleUrls: ["./project-table.component.css"],
})
export class ProjectTableComponent implements OnChanges, OnInit {
  displayedColumns: string[] = [
    "name",
    "description",
    "created",
    "select",
    "delete",
  ];
  dataSource: MatTableDataSource<Project>;
  @Input() projects: Project[] = [];
  @Output() selectProjectEvent = new EventEmitter<Project>();
  @Output() deleteProjectEvent = new EventEmitter<Project>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.projects.length > 0) {
      this.dataSource = new MatTableDataSource<Project>(this.projects);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectProject(project: Project) {
    this.selectProjectEvent.emit(project);
  }

  deleteProject(project: Project) {
    this.deleteProjectEvent.emit(project);
  }
}
