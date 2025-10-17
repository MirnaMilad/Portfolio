import type { Project } from './projects.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'UX Theme Builder',
    subtitle: 'Enterprise-grade theme builder and design system generator',
    description:
      'A powerful, enterprise-grade theme builder and design system generator built with Angular 20, leveraging signals, zoneless change detection, and modern web standards.',
    longDescription:
      'A powerful, enterprise-grade theme builder and design system generator built with Angular 20, leveraging signals, zoneless change detection, and modern web standards. Demonstrates advanced frontend architecture, reactive state management, and dynamic UI rendering. Allows users to create, customize, save, and export complete design systems without any external UI library dependencies.',
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
    status: 'Production',
    features: [
      {
        icon: '✨',
        title: 'Dynamic Token System',
        description: 'Define colors, typography, spacing, and border radius',
      },
      {
        icon: '🔄',
        title: 'Live Preview',
        description:
          'See changes instantly with real-time preview of your theme',
      },
      {
        icon: '💾',
        title: 'LocalStorage Integration',
        description:
          'Save and load themes seamlessly using browser LocalStorage',
      },
      {
        icon: '📥',
        title: 'Export Functionality',
        description: 'Export themes as JSON for version control and sharing',
      },
      {
        icon: '🎨',
        title: 'Preset Themes',
        description: 'Start with professional presets (Light, Dark, Colorful)',
      },
      {
        icon: '⚡',
        title: 'No External Dependencies',
        description:
          'Pure Angular implementation without any external UI libraries',
      },
    ],
    highlights: [
      {
        text: 'Built with Angular 20 and leveraging the latest framework features',
      },
      {
        text: 'Fully zoneless application using Angular Signals for state management',
      },
      {
        text: 'Type-safe implementation with strict TypeScript configuration',
      },
      { text: 'Server-side generation (SSG) ready for optimal performance' },
      {
        text: 'No external UI library dependencies - pure Angular implementation',
      },
    ],
    techDetails: {
      framework: 'Angular 20',
      stateManagement: 'Angular Signals',
      changeDetection: 'Zoneless',
      styling: 'SCSS + CSS Custom Properties',
      storage: 'LocalStorage API',
      typescript: 'v5.6+ (Strict Mode)',
    },
    usageSteps: [
      {
        title: 'Customize Your Theme',
        description:
          'Use the intuitive interface to adjust colors, typography, spacing, and border radius to match your design vision.',
      },
      {
        title: 'Preview in Real-Time',
        description:
          'See your changes instantly with the live preview feature, ensuring your theme looks perfect before saving.',
      },
      {
        title: 'Save & Export',
        description:
          'Save your theme to LocalStorage for later use or export it as JSON for version control and sharing with your team.',
      },
    ],
  },
];
