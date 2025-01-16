import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url: string = '/assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return this.http.get<Project[]>(this.url).pipe(
      map(projects => projects.find(project => project.id === id))
    );
  }
}
