import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { environment as env } from "src/environments/environment";
import { Project } from "../models/project";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  public projectSubject$: BehaviorSubject<Project>;
  public projectsSubject$: BehaviorSubject<Project[]>;

  constructor(private http: HttpClient) {
    this.projectSubject$ = new BehaviorSubject<Project>(null);
    this.projectsSubject$ = new BehaviorSubject<Project[]>([]);
  }

  public getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${env.BASE_URL}/project`);
  }

  public save(project: Project): Observable<Project> {
    return this.http.post<Project>(`${env.BASE_URL}/project`, project);
  }

  public delete(id: number) {
    return this.http.delete(`${env.BASE_URL}/project/${id}`);
  }
}
