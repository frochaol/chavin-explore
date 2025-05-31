import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chavin-explore-webp';
  isMenuOpen = false;
  isMobile = false;
  activeTab = 'todos'; // Default active tab

  constructor() {
    this.checkScreenSize();
    // Listen for window resize events
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Prevent body scroll when mobile menu is open
    if (this.isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  // Close menu when clicking outside or on escape key
  closeMenu() {
    this.isMenuOpen = false;
    document.body.classList.remove('menu-open');
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
