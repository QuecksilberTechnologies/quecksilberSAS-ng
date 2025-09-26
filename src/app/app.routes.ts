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
    path: 'products',
    loadComponent: () => import('./pages/products/products'),
    title: `Products | ${titleSuffix}`,
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
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy-policy/privacy-policy'),
    title: `Privacy Policy | ${titleSuffix}`,
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms'),
    title: `Terms of Service | ${titleSuffix}`,
  },
];
