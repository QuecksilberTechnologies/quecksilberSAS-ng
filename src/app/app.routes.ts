import { Routes } from '@angular/router';

const titleSuffix = 'Quecksilber'; //environment.appName;

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home'),
    title: `Home | ${titleSuffix}`,
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about'),
    title: `About | ${titleSuffix}`,
  },
  {
    path: 'works',
    loadComponent: () => import('./pages/works/works'),
    title: `Works | ${titleSuffix}`,
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/our-services/our-services'),
    title: `Services | ${titleSuffix}`,
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers'),
    title: `Careers | ${titleSuffix}`,
  },
  {
    path: 'blogs',
    loadComponent: () => import('./pages/blogs/blogs'),
    title: `Blogs | ${titleSuffix}`,
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact'),
    title: `Contact | ${titleSuffix}`,
  },
];
