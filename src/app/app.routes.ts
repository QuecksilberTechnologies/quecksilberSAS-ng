import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about'),
  },
  {
    path: 'works',
    loadComponent: () => import('./pages/works/works'),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/our-services/our-services'),
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers'),
  },
  {
    path: 'blogs',
    loadComponent: () => import('./pages/blogs/blogs'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact'),
  },
];
