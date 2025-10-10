import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillCategory } from './categories.model';
import { SKILLS_CATEGORIES } from './categories.config';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Categories {
  skillCategories: SkillCategory[] = SKILLS_CATEGORIES;
}
