import {
  ChangeDetectionStrategy,
  Component,
  input,
  type InputSignal,
} from '@angular/core';
import type { ProjectFeature } from '../../../projects/projects.model';

@Component({
  selector: 'app-project-features',
  imports: [],
  templateUrl: './project-features.html',
  styleUrl: './project-features.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFeatures {
  features: InputSignal<ProjectFeature[]> = input.required<ProjectFeature[]>();
}
