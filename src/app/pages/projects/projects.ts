import {
  ChangeDetectionStrategy,
  Component,
  signal,
  type WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Project } from './projects.model';
import { PROJECTS } from './projects.config';
import { TruncatePipe } from './pipes/truncate.pipe';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, TruncatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  projects: WritableSignal<Project[]> = signal<Project[]>(PROJECTS);
}
