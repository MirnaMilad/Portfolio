import {
  ChangeDetectionStrategy,
  Component,
  input,
  type InputSignal,
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import type { Project } from '../../../projects/projects.model';

@Component({
  selector: 'app-project-header',
  imports: [TitleCasePipe],
  templateUrl: './project-header.html',
  styleUrl: './project-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHeader {
  project: InputSignal<Project> = input.required<Project>();
}
