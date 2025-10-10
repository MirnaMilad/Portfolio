export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack';
  featured?: boolean;
}

export interface ProjectFilter {
  label: string;
  value: string;
}
