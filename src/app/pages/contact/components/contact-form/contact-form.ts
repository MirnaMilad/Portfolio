import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../../contact.config';
import { ContactForm, EmailJSResponse } from '../../contact.model';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  private fb: FormBuilder = inject(FormBuilder);

  contactForm: FormGroup;
  isSubmitting: boolean = false;
  statusMessage: string = '';
  isSuccess: boolean = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });

    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.statusMessage = '';

    try {
      const formData: ContactForm = this.contactForm.value;

      const templateParams: Record<string, string> = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Mirna Milad',
      };

      const response: EmailJSResponse = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        this.isSuccess = true;
        this.statusMessage =
          "Message sent successfully! I'll get back to you soon.";
        this.contactForm.reset();
      }
    } catch (error) {
      this.isSuccess = false;
      this.statusMessage =
        'Failed to send message. Please try again or contact me directly via email.';
      console.error('EmailJS Error:', error);
    } finally {
      this.isSubmitting = false;

      setTimeout(() => {
        this.statusMessage = '';
      }, 5000);
    }
  }
}
