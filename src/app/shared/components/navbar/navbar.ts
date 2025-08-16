import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, DOCUMENT, inject, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

interface NavItem {
  name: string;
  path: string;
  icon?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

@Component({
  selector: 'qs-navbar',
  imports: [RouterModule, NgOptimizedImage, ButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar implements OnDestroy {
  router = inject(Router);
  #documnet = inject(DOCUMENT);
  isOpen = false;

  // Navigation items as TypeScript variable
  navItems: NavItem[] = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blogs', path: '/blogs' },
    // { name: 'Contact', path: '/contact' },
  ];

  // Social media links as TypeScript variable
  socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/quecksilber',
      icon: 'facebook',
      ariaLabel: 'Visit our Facebook page',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/quecksilber',
      icon: 'twitter',
      ariaLabel: 'Follow us on Twitter',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/quecksilber',
      icon: 'linkedin',
      ariaLabel: 'Connect with us on LinkedIn',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/quecksilber',
      icon: 'instagram',
      ariaLabel: 'Follow us on Instagram',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/quecksilber',
      icon: 'github',
      ariaLabel: 'View our projects on GitHub',
    },
  ];

  // Brand information
  brandInfo = {
    name: 'Quecksilber',
    logo: 'quecksilberIcon.png',
    homePath: '/',
  };

  handleNavClick(path: string) {
    this.router.navigate([path]);
    this.closeMobileMenu();
  }

  setIsOpen() {
    this.isOpen = !this.isOpen;
    // Prevent body scroll when mobile menu is open
    if (this.isOpen) {
      this.#documnet.body.style.overflow = 'hidden';
      this.#documnet.body.classList.add('menu-open');
    } else {
      this.#documnet.body.style.overflow = '';
      this.#documnet.body.classList.remove('menu-open');
    }
  }

  closeMobileMenu() {
    if (this.isOpen) {
      this.isOpen = false;
      this.#documnet.body.style.overflow = '';
      this.#documnet.body.classList.remove('menu-open');
    }
  }

  // Handle escape key for mobile menu
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isOpen) {
      this.closeMobileMenu();
    }
  }

  // Get social icon SVG based on platform
  getSocialIcon(platform: string): string {
    const icons = {
      facebook: `<path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>`,
      twitter: `<path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>`,
      linkedin: `<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>`,
      instagram: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.946.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272 1.281.059 1.69.072 4.946.072s3.665-.013 4.946-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.281.072-1.69.072-4.946V9.333c0-3.256-.013-3.665-.072-4.946-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>`,
      github: `<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>`,
    };
    return icons[platform as keyof typeof icons] || '';
  }

  ngOnDestroy() {
    // Clean up body classes when component is destroyed
    this.#documnet.body.classList.remove('menu-open');
    this.#documnet.body.style.overflow = '';
  }

  toggleMenu() {
    console.log('dddd');
  }
}
