import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('fr');
  currentLang$ = this.currentLangSubject.asObservable();

  constructor() {
    const savedLang = localStorage.getItem('language') || 'fr';
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {
    this.currentLangSubject.next(lang);
    localStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    return this.currentLangSubject.value;
  }
}