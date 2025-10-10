export interface Environment {
  production: boolean;
  emailjs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}

export const environment: Environment = {
  production: false,
  emailjs: {
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY',
  },
  contact: {
    email: 'your.email@example.com',
    phone: '+20 XXX XXX XXXX',
    location: 'Your City, Your Country',
  },
};
