import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_INFO } from '../../contact.config';

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInfoComponent {
  contactInfo: typeof CONTACT_INFO = CONTACT_INFO;
}
