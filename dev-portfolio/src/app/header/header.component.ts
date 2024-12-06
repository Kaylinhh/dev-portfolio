import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navList: {id: number, label: string, path: string}[] = [
    {id: 1, label: 'home', path: '/home'},
    {id: 2, label: 'projects', path: '/project'},
    {id: 3, label: 'about', path: '/about'}
  ]
}
