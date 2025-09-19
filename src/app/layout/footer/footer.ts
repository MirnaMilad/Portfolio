import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocialLink } from './footer.model';
import { FOOTER_CONFIG } from './footer.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  socialLinks: SocialLink[] = FOOTER_CONFIG;
}
