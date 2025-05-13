import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./features/about/about.component'),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio.component'),
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component'),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./features/contact/contact.component'),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component'),
  },
  {
    path: 'registration',
    loadComponent: () => import('./features/auth/registration/registration.component'),
  },
];
