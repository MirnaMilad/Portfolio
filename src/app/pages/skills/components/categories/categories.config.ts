import { SkillCategory } from './categories.model';

export const CATEGORY_ICONS: Record<string, string> = {
  'Frontend Technologies': 'bi bi-code-square',
  'Backend & APIs': 'bi bi-server',
  'Development Tools & DevOps': 'bi bi-tools',
  'Quality Assurance & Testing': 'bi bi-check2-square',
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
        name: 'React',
        icon: 'bi bi-gear',
        category: 'frontend',
        proficiency: 'Expert',
      },
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
        proficiency: 'Expert',
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
        name: 'HTML5',
        icon: 'bi bi-file-earmark-code',
        category: 'frontend',
        proficiency: 'Expert',
      },
      {
        name: 'CSS3',
        icon: 'bi bi-palette',
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
        proficiency: 'Expert',
      },
      {
        name: 'Angular Material',
        icon: 'bi bi-palette',
        category: 'frontend',
        proficiency: 'Expert',
      },
      {
        name: 'Material-UI',
        icon: 'bi bi-palette',
        category: 'frontend',
        proficiency: 'Advanced',
      },
      {
        name: 'Tailwind CSS',
        icon: 'bi bi-brush',
        category: 'frontend',
        proficiency: 'Advanced',
      },
      {
        name: 'Responsive Design',
        icon: 'bi bi-phone-landscape',
        category: 'frontend',
        proficiency: 'Expert',
      },
      {
        name: 'Single Page Applications (SPA)',
        icon: 'bi bi-window',
        category: 'frontend',
        proficiency: 'Expert',
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
        proficiency: 'Advanced',
      },
      {
        name: 'JWT Authentication',
        icon: 'bi bi-shield-check',
        category: 'backend',
        proficiency: 'Expert',
      },
      {
        name: 'NestJS',
        icon: 'bi bi-server',
        category: 'backend',
        proficiency: 'Advanced',
      },
      {
        name: 'MongoDB',
        icon: 'bi bi-database',
        category: 'backend',
        proficiency: 'Advanced',
      },
      {
        name: 'SQL',
        icon: 'bi bi-database',
        category: 'backend',
        proficiency: 'Intermediate',
      },
    ],
  },
  {
    title: 'Development Tools & DevOps',
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
        name: 'Azure DevOps',
        icon: 'bi bi-cloud',
        category: 'tools',
        proficiency: 'Advanced',
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
        proficiency: 'Expert',
      },
      {
        name: 'Postman',
        icon: 'bi bi-cloud-arrow-up',
        category: 'tools',
        proficiency: 'Expert',
      },
      {
        name: 'Figma',
        icon: 'bi bi-brush',
        category: 'tools',
        proficiency: 'Advanced',
      },
    ],
  },
  {
    title: 'Quality Assurance & Testing',
    description: 'Testing frameworks and quality assurance tools',
    skills: [
      {
        name: 'Karma',
        icon: 'bi bi-check2-square',
        category: 'testing',
        proficiency: 'Expert',
      },
      {
        name: 'Jasmine',
        icon: 'bi bi-check2-square',
        category: 'testing',
        proficiency: 'Expert',
      },
      {
        name: 'Playwright',
        icon: 'bi bi-check2-square',
        category: 'testing',
        proficiency: 'Expert',
      },
      {
        name: 'precommit hooks',
        icon: 'bi bi-git',
        category: 'testing',
        proficiency: 'Advanced',
      },
      {
        name: 'SonarQube',
        icon: 'bi bi-shield-check',
        category: 'testing',
        proficiency: 'Advanced',
      },
      {
        name: 'prettier',
        icon: 'bi bi-textarea-resize',
        category: 'testing',
        proficiency: 'Advanced',
      },
      {
        name: 'ESLint',
        icon: 'bi bi-check2-square',
        category: 'testing',
        proficiency: 'Expert',
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
        name: 'Clean Code Principles',
        icon: 'bi bi-code',
        category: 'practices',
        proficiency: 'Expert',
      },
      {
        name: 'Component Architecture',
        icon: 'bi bi-puzzle',
        category: 'practices',
        proficiency: 'Expert',
      },
      {
        name: 'SOLID Principles',
        icon: 'bi bi-diagram-3',
        category: 'practices',
        proficiency: 'Expert',
      },
      {
        name: 'Git Hooks',
        icon: 'bi bi-git',
        category: 'practices',
        proficiency: 'Advanced',
      },

      {
        name: 'CI/CD Pipelines',
        icon: 'bi bi-cloud-arrow-up',
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
