import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'qs-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavbarComponent {
  router = inject(Router);
  location = inject(Location);
  isOpen = false;

  navItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about-us' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Login', path: '/login' },
  ];

  handleNavClick(path: string) {
    this.router.navigate([path]);
  }

  setIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
