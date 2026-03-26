import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LanguageService } from './language.service';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  getProjectList(): Observable<Project[]> {
    return this.http.get<Project[]>(`assets/data/projects-fr.json`);
  }

  getProjects(): Observable<Project[]> {
    return this.languageService.currentLang$.pipe(
      switchMap(lang => {
        const file = lang === 'fr' ? 'projects-fr.json' : 'projects-en.json';
        return this.http.get<Project[]>(`assets/data/${file}`); 
      })
    );
  }

  getProjectById(id: number): Observable<Project> {
    return this.languageService.currentLang$.pipe(
      switchMap(lang => {
        const file = lang === 'fr' ? 'projects-fr.json' : 'projects-en.json';
        return this.http.get<Project[]>(`assets/data/${file}`).pipe(
          map((projects: Project[]) => projects.find(p => p.id === id)!)
        );
      })
    );
  }
}