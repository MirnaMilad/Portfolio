import {
  ChangeDetectionStrategy,
  Component,
  input,
  type InputSignal,
} from '@angular/core';
import type { ProjectUsageStep } from '../../../projects/projects.model';

@Component({
  selector: 'app-usage-guide',
  imports: [],
  templateUrl: './usage-guide.html',
  styleUrl: './usage-guide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsageGuide {
  usageSteps: InputSignal<ProjectUsageStep[]> =
    input.required<ProjectUsageStep[]>();
}
