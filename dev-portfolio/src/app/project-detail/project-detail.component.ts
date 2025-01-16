import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/project.model';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
project!: Project | undefined;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {}

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.projectsService.getProjectById(id).subscribe(data => {
    this.project = data;
  })
}


}
