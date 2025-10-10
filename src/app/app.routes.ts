import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(
        (m: typeof import('./pages/home/home')) => m.Home
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects').then(
        (m: typeof import('./pages/projects/projects')) => m.Projects
      ),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./pages/skills/skills').then(
        (m: typeof import('./pages/skills/skills')) => m.Skills
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(
        (m: typeof import('./pages/contact/contact')) => m.Contact
      ),
  },
];
