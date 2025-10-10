import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactFormComponent } from './components/form/form';
import { ContactInfoComponent } from './components/info/info';

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, ContactInfoComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {}
