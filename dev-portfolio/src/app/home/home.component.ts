import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  hasLoaded = false;
  private touchStartY = 0;

  constructor(private scroller: ViewportScroller, private router: Router) {}  // Inject Router

  ngOnInit(): void {
    setTimeout(() => {
      this.hasLoaded = true;  // Add the 'show' class to trigger the slide-in animation
    }, 100); // Optional delay to ensure the element is fully rendered

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      });
    
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.goToAbout();
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent){
    this.touchStartY = event.touches[0].clientY;
    }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent){
    const touchEndY = event.touches[0].clientY;
    const deltaY = this.touchStartY - touchEndY;

    if (deltaY > 50) {
      this.goToAbout();
    }
  }

  goToAbout(): void {
    this.router.navigate(['/about']);
  }

}