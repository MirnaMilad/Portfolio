import { SkillCategory } from './categories.model';

export const CATEGORY_ICONS: Record<string, string> = {
  'Frontend Technologies': 'bi bi-code-square',
  'Development Tools': 'bi bi-tools',
  'Backend & APIs': 'bi bi-server',
  'Development Practices': 'bi bi-diagram-3',
};

export const SKILL_CARD_CLASSES: Record<string, string> = {
  Expert: 'border-success bg-success bg-opacity-10',
  Advanced: 'border-warning bg-warning bg-opacity-10',
  Intermediate: 'border-info bg-info bg-opacity-10',
  Beginner: 'border-primary bg-primary bg-opacity-10',
};

export const PROFICIENCY_WIDTHS: Record<string, number> = {
  Expert: 100,
  Advanced: 85,
  Intermediate: 70,
  Beginner: 50,
};

export const PROFICIENCY_PROGRESS_CLASSES: Record<string, string> = {
  Expert: 'bg-success',
  Advanced: 'bg-warning',
  Intermediate: 'bg-info',
  Beginner: 'bg-primary',
};

export const DEFAULT_CONFIG: {
  readonly CATEGORY_ICON: string;
  readonly SKILL_CARD_CLASS: string;
  readonly PROFICIENCY_WIDTH: number;
  readonly PROGRESS_CLASS: string;
} = {
  CATEGORY_ICON: 'bi bi-gear',
  SKILL_CARD_CLASS: 'border-light bg-light',
  PROFICIENCY_WIDTH: 60,
  PROGRESS_CLASS: 'bg-secondary',
} as const;

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Technologies',
    description: 'Modern frameworks and libraries for building user interfaces',
    skills: [
      {
        name: 'Angular',
        icon: 'bi bi-code-square',
        category: 'frontend',
        proficiency: 'Expert',
      },
      {
        name: 'Ionic',
        icon: 'bi bi-phone',
        category: 'frontend',
        proficiency: 'Advanced',
      },
      {
        name: 'JavaScript (ES6+)',
        icon: 'bi bi-braces',
        category: 'frontend',
        proficiency: 'Expert',
      },
      {
        name: 'TypeScript',
        icon: 'bi bi-file-earmark-code',
        category: 'frontend',
        proficiency: 'Expert',
      },
      {
        name: 'Bootstrap',
        icon: 'bi bi-bootstrap',
        category: 'frontend',
        proficiency: 'Expert',
      },
      {
        name: 'PrimeNG',
        icon: 'bi bi-ui-checks',
        category: 'frontend',
        proficiency: 'Advanced',
      },
      {
        name: 'Angular Material',
        icon: 'bi bi-palette',
        category: 'frontend',
        proficiency: 'Advanced',
      },
      {
        name: 'Responsive Design',
        icon: 'bi bi-phone-landscape',
        category: 'frontend',
        proficiency: 'Advanced',
      },
      {
        name: 'React',
        icon: 'bi bi-gear',
        category: 'frontend',
        proficiency: 'Intermediate',
      },
    ],
  },
  {
    title: 'Development Tools',
    description: 'Essential tools for development workflow and productivity',
    skills: [
      {
        name: 'Git',
        icon: 'bi bi-git',
        category: 'tools',
        proficiency: 'Expert',
      },
      {
        name: 'GitHub',
        icon: 'bi bi-github',
        category: 'tools',
        proficiency: 'Expert',
      },
      {
        name: 'VS Code',
        icon: 'bi bi-code-slash',
        category: 'tools',
        proficiency: 'Expert',
      },
      {
        name: 'Chrome DevTools',
        icon: 'bi bi-bug',
        category: 'tools',
        proficiency: 'Advanced',
      },
      {
        name: 'Postman',
        icon: 'bi bi-cloud-arrow-up',
        category: 'tools',
        proficiency: 'Advanced',
      },
      {
        name: 'Playwright',
        icon: 'bi bi-robot',
        category: 'tools',
        proficiency: 'Intermediate',
      },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Server-side technologies and API integration',
    skills: [
      {
        name: 'REST APIs',
        icon: 'bi bi-cloud',
        category: 'backend',
        proficiency: 'Expert',
      },
      {
        name: 'GraphQL',
        icon: 'bi bi-diagram-3',
        category: 'backend',
        proficiency: 'Intermediate',
      },
      {
        name: 'Node.js',
        icon: 'bi bi-server',
        category: 'backend',
        proficiency: 'Intermediate',
      },
      {
        name: 'Express.js',
        icon: 'bi bi-layers',
        category: 'backend',
        proficiency: 'Intermediate',
      },
      {
        name: 'MongoDB',
        icon: 'bi bi-database',
        category: 'backend',
        proficiency: 'Intermediate',
      },
    ],
  },
  {
    title: 'Development Practices',
    description:
      'Methodologies and best practices for quality software development',
    skills: [
      {
        name: 'Agile/Scrum',
        icon: 'bi bi-arrow-repeat',
        category: 'practices',
        proficiency: 'Expert',
      },
      {
        name: 'Clean Code',
        icon: 'bi bi-code',
        category: 'practices',
        proficiency: 'Expert',
      },
      {
        name: 'Component Reusability',
        icon: 'bi bi-puzzle',
        category: 'practices',
        proficiency: 'Expert',
      },
      {
        name: 'Testing',
        icon: 'bi bi-check2-square',
        category: 'practices',
        proficiency: 'Advanced',
      },
      {
        name: 'CI/CD',
        icon: 'bi bi-arrow-clockwise',
        category: 'practices',
        proficiency: 'Advanced',
      },
      {
        name: 'Code Review',
        icon: 'bi bi-eye',
        category: 'practices',
        proficiency: 'Expert',
      },
    ],
  },
];
