import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  SocialLinkModel,
  QuickLinkModel,
  SkillModel,
  ContactInfoModel,
} from './footer.model';
import {
  FOOTER_CONFIG,
  QUICK_LINKS,
  FOOTER_SKILLS,
  CONTACT_INFO,
} from './footer.config';
import { AboutMe } from './components/about-me/about-me';
import { QuickLinks } from './components/quick-links/quick-links';
import { Skills } from './components/skills/skills';
import { ContactInfo } from './components/contact-info/contact-info';
import { Copyright } from './components/copyright/copyright';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AboutMe, QuickLinks, Skills, ContactInfo, Copyright],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  socialLinks: SocialLinkModel[] = FOOTER_CONFIG;
  quickLinks: QuickLinkModel[] = QUICK_LINKS;
  skills: SkillModel[] = FOOTER_SKILLS;
  contactInfo: ContactInfoModel[] = CONTACT_INFO;
}
