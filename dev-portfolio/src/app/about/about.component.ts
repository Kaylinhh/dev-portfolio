import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../shared/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  currentLang$!: Observable<String>;

  constructor(private languageService: LanguageService) {
    this.currentLang$ = this.languageService.currentLang$;
  }
}