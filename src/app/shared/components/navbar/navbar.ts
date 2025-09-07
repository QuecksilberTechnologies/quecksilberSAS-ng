import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, DOCUMENT, inject, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LucideAngularModule, Menu, Phone, X } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';

interface NavItem {
  name: string;
  path: string;
  icon?: string;
}

@Component({
  selector: 'qs-navbar',
  imports: [RouterModule, NgOptimizedImage, ButtonModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar implements OnDestroy {
  router = inject(Router);
  #documnet = inject(DOCUMENT);
  isOpen = false;
  Phone = Phone;
  Menu = Menu;
  X = X;

  // Navigation items
  navItems: NavItem[] = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    // { name: 'Blogs', path: '/blogs' },
    // { name: 'Contact', path: '/contact' },
  ];

  handleNavClick(path: string) {
    this.router.navigate([path]);
    this.closeMobileMenu();
  }

  closeMobileMenu() {
    if (this.isOpen) {
      this.isOpen = false;
      this.#documnet.body.classList.remove('menu-open');
    }
  }

  setIsOpen() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.#documnet.body.classList.add('menu-open');
    } else {
      this.#documnet.body.classList.remove('menu-open');
    }
  }

  ngOnDestroy() {
    this.#documnet.body.classList.remove('menu-open');
  }
}
