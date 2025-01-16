import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Project } from '../shared/project.model';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {

  projectList: Project[] = [];

  constructor(private projectsService: ProjectsService){}

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe(data => {
      this.projectList = data;
    })
  }
}
