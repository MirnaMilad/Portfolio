import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillCategory } from './categories.model';
import {
  SKILLS_CATEGORIES,
  CATEGORY_ICONS,
  SKILL_CARD_CLASSES,
  PROFICIENCY_WIDTHS,
  PROFICIENCY_PROGRESS_CLASSES,
  DEFAULT_CONFIG,
} from './categories.config';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Categories {
  skillCategories: SkillCategory[] = SKILLS_CATEGORIES;
  getCategoryIcon(categoryTitle: string): string {
    return CATEGORY_ICONS[categoryTitle] || DEFAULT_CONFIG.CATEGORY_ICON;
  }
  getSkillCardClass(proficiency?: string): string {
    return proficiency
      ? SKILL_CARD_CLASSES[proficiency as keyof typeof SKILL_CARD_CLASSES] ||
          DEFAULT_CONFIG.SKILL_CARD_CLASS
      : DEFAULT_CONFIG.SKILL_CARD_CLASS;
  }
  getProficiencyWidth(proficiency?: string): number {
    return proficiency
      ? PROFICIENCY_WIDTHS[proficiency as keyof typeof PROFICIENCY_WIDTHS] ||
          DEFAULT_CONFIG.PROFICIENCY_WIDTH
      : DEFAULT_CONFIG.PROFICIENCY_WIDTH;
  }
  getProficiencyProgressClass(proficiency?: string): string {
    return proficiency
      ? PROFICIENCY_PROGRESS_CLASSES[
          proficiency as keyof typeof PROFICIENCY_PROGRESS_CLASSES
        ] || DEFAULT_CONFIG.PROGRESS_CLASS
      : DEFAULT_CONFIG.PROGRESS_CLASS;
  }
}
