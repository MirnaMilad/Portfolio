export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}
export interface Skill {
  name: string;
  icon: string;
  category: string;
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}
