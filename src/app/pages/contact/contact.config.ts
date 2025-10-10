import { environment } from '../../../environments/environment';

export const EMAIL_CONFIG: {
  readonly SERVICE_ID: string;
  readonly TEMPLATE_ID: string;
  readonly PUBLIC_KEY: string;
} = {
  SERVICE_ID: environment.emailjs.serviceId,
  TEMPLATE_ID: environment.emailjs.templateId,
  PUBLIC_KEY: environment.emailjs.publicKey,
};

export const CONTACT_INFO: {
  readonly email: string;
  readonly phone: string;
  readonly location: string;
} = {
  email: environment.contact.email,
  phone: environment.contact.phone,
  location: environment.contact.location,
};
