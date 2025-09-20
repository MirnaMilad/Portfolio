import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Skill } from './home.model';
import { SKILLS } from './home.config';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  skills: Skill[] = SKILLS;
}
