export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectHighlight {
  text: string;
}

export interface ProjectUsageStep {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack';
  featured?: boolean;
  status?: string;
  features?: ProjectFeature[];
  highlights?: ProjectHighlight[];
  techDetails?: {
    framework?: string;
    stateManagement?: string;
    changeDetection?: string;
    styling?: string;
    storage?: string;
    typescript?: string;
  };
  usageSteps?: ProjectUsageStep[];
}

export interface ProjectFilter {
  label: string;
  value: string;
}
