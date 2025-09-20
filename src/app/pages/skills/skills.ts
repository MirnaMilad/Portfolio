import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { Categories } from './components/categories/categories';
import { Action } from './components/action/action';

@Component({
  selector: 'app-skills',
  imports: [HeroSection, Categories, Action],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {}
