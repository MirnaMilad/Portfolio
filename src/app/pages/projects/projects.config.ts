import type { Project } from './projects.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'UX Theme Builder',
    description:
      'Enterprise-grade theme builder and design system generator built with Angular 20. Features dynamic token system, live preview, persistent storage, and multiple export formats (JSON, CSS, SCSS). Demonstrates advanced frontend architecture with signals, zoneless change detection, and reactive state management.',
    image: 'assets/images/projects/ux-theme-builder.webp',
    technologies: [
      'Angular 20',
      'TypeScript',
      'SCSS',
      'Angular Signals',
      'Zoneless',
    ],
    liveUrl: 'https://mirnamilad.github.io/ux-theme-builder/builder',
    githubUrl: 'https://github.com/MirnaMilad/ux-theme-builder',
    category: 'web',
    featured: true,
  },
];
