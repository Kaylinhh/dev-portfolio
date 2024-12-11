import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
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

  constructor(private router: Router) {}  // Inject Router

  ngOnInit(): void {
    setTimeout(() => {
      this.hasLoaded = true;  // Add the 'show' class to trigger the slide-in animation
    }, 100); // Optional delay to ensure the element is fully rendered
  }

  goToHeader(): void {
    this.router.navigate(['/header']);  // Navigate to the 'another' route
  }
}
