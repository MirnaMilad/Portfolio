export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailJSResponse {
  status: number;
  text: string;
}
