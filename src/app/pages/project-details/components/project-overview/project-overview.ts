import {
  ChangeDetectionStrategy,
  Component,
  input,
  type InputSignal,
} from '@angular/core';
import type { Project } from '../../../projects/projects.model';

@Component({
  selector: 'app-project-overview',
  imports: [],
  templateUrl: './project-overview.html',
  styleUrl: './project-overview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectOverview {
  project: InputSignal<Project> = input.required<Project>();
}
