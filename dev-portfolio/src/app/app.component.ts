import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showHeader = true;

  constructor(private router: Router) {
    this.updateHeaderVisibility(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateHeaderVisibility(event.url);
      });
  }

  private updateHeaderVisibility(url: string): void {
    this.showHeader = url !== '/home' && url !== '/' && url !== '/header';
  }
}
