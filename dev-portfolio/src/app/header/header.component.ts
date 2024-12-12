import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isVisible = false;
  
  ngOnInit(): void {
    // Trigger slide-in animation after the component has been initialized
    setTimeout(() => {
      this.isVisible = true;
    }, 100);  // Optional delay for smooth initial render
  }
  
  navList: {id: number, label: string, path: string}[] = [
    {id: 1, label: 'home', path: '/home'},
    {id: 2, label: 'projects', path: '/project'},
    {id: 3, label: 'about', path: '/about'}
  ]
}
