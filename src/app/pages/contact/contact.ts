import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactInfoComponent } from './components/info/info';
import { ContactFormComponent } from './components/contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, ContactInfoComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {}
