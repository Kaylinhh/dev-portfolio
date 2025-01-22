import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/project.model';
import { ProjectsService } from '../shared/projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

project!: Project;
isImageModalOpen = false;
isVideoModalOpen = false;


  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {}

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.projectsService.getProjectById(id).subscribe(data => {
    this.project = data;
  })
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
