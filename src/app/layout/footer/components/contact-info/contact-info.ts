import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { ContactInfoModel, SocialLinkModel } from '../../footer.model';

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInfo {
  contactInfo: InputSignal<ContactInfoModel[]> =
    input.required<ContactInfoModel[]>();
  socialLinks: InputSignal<SocialLinkModel[]> =
    input.required<SocialLinkModel[]>();
}
