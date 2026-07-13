import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/project.model';
import { ProjectsService } from '../shared/projects.service';
import { LanguageService } from '../shared/language.service';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../highlight.pipe';
import { Skill } from '../shared/skill.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule, HighlightPipe],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  project!: Project;
  skillList!: Skill[];
  isImageModalOpen = false;
  isVideoModalOpen = false;
  
  private langSubscription?: Subscription;
  currentLang$!: Observable<String>;

  constructor(
    private route: ActivatedRoute, 
    private projectsService: ProjectsService,
    private languageService: LanguageService
  ) {
        this.currentLang$ = this.languageService.currentLang$;
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.langSubscription = this.languageService.currentLang$.subscribe(() => {
      this.loadProject(id);
    });
  }

  loadProject(id: number) {
    this.projectsService.getProjectById(id).subscribe(data => {
      if (data) {
        this.project = data;
        this.skillList = this.project.skill;
      }
    });
  }

  ngOnDestroy() {
    this.langSubscription?.unsubscribe();
  }

  openImageModal(): void {
    this.isImageModalOpen = true;
  }

  openVideoModal(): void {
    this.isVideoModalOpen = true;
  }

  closeImageModal(): void {
    this.isImageModalOpen = false;
  }

  closeVideoModal(): void {
    this.isVideoModalOpen = false;
  }
}