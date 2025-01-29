import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  hasLoaded = false;

  constructor(private scroller: ViewportScroller, private router: Router) {}  // Inject Router

  ngOnInit(): void {
    setTimeout(() => {
      this.hasLoaded = true;  // Add the 'show' class to trigger the slide-in animation
    }, 100); // Optional delay to ensure the element is fully rendered
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.router.navigate(['/about']);
    }
  }

  goToAbout(): void {
    this.router.navigate(['/about']);  // Navigate to the 'another' route
  }

}
