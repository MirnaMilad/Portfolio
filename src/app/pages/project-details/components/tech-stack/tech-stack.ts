import {
  ChangeDetectionStrategy,
  Component,
  input,
  type InputSignal,
} from '@angular/core';
import type { Project } from '../../../projects/projects.model';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStack {
  project: InputSignal<Project> = input.required<Project>();
}
