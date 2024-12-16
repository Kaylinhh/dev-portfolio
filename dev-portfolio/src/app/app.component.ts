import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showHeaderAndFooter = true;

  
  constructor(private router: Router) {
    this.updateHeaderVisibility(this.router.url);
    
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.updateHeaderVisibility(event.url);
    });
  }

  private updateHeaderVisibility(url: string): void {
    this.showHeaderAndFooter = url !== '/home' && url !== '/' && url !== '/header';
  }
}
