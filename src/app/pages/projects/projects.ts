import {
  ChangeDetectionStrategy,
  Component,
  signal,
  type WritableSignal,
} from '@angular/core';
import type { Project } from './projects.model';
import { PROJECTS } from './projects.config';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  projects: WritableSignal<Project[]> = signal<Project[]>(PROJECTS);
}
