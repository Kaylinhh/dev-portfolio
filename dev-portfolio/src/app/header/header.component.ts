import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../shared/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isVisible = false;
  currentLang$: Observable<string>; // ← Déclare seulement

  constructor(private languageService: LanguageService) {
    this.currentLang$ = this.languageService.currentLang$; // ← Initialise ICI
  }

  switchLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);  
  }

  navList: {id: number, label: string, path: string}[] = [
    {id: 1, label: '#home', path: '/home'},
    {id: 2, label: '#projects', path: '/project'},
    {id: 3, label: '#about', path: '/about'}
  ]
}