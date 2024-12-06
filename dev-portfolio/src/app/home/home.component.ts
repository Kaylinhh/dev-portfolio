import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
@HostBinding('class.hide-navigation')
export class HomeComponent {

}
