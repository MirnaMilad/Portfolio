import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  type InputSignal,
  type Signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Project } from '../projects/projects.model';
import { PROJECTS } from '../projects/projects.config';
import { ProjectHeader } from './components/project-header/project-header';
import { ProjectFeatures } from './components/project-features/project-features';
import { ProjectOverview } from './components/project-overview/project-overview';
import { TechStack } from './components/tech-stack/tech-stack';
import { UsageGuide } from './components/usage-guide/usage-guide';
import { ProjectActions } from './components/project-actions/project-actions';

@Component({
  selector: 'app-project-details',
  imports: [
    RouterLink,
    ProjectHeader,
    ProjectFeatures,
    ProjectOverview,
    TechStack,
    UsageGuide,
    ProjectActions,
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetails {
  id: InputSignal<string> = input<string>('');

  project: Signal<Project | undefined> = computed(() => {
    const idValue: string = this.id();
    if (!idValue || idValue === '') {
      return undefined;
    }
    const projectId: number = Number(idValue);
    return PROJECTS.find((p: Project) => p.id === projectId);
  });
}
