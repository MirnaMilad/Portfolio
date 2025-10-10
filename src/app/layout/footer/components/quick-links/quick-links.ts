import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { QuickLinkModel } from '../../footer.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quick-links',
  imports: [RouterLink],
  templateUrl: './quick-links.html',
  styleUrl: './quick-links.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickLinks {
  quickLinks: InputSignal<QuickLinkModel[]> =
    input.required<QuickLinkModel[]>();
}
