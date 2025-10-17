import {
  ChangeDetectionStrategy,
  Component,
  input,
  type InputSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Project } from '../../../projects/projects.model';

@Component({
  selector: 'app-project-actions',
  imports: [RouterLink],
  templateUrl: './project-actions.html',
  styleUrl: './project-actions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectActions {
  project: InputSignal<Project> = input.required<Project>();
}
