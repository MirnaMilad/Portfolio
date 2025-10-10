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
    serviceId: 'service_2h8a354',
    templateId: 'template_y0pwr88',
    publicKey: '666FFD1iUek-m0BsU',
  },
  contact: {
    email: 'mirnamilad0101@gmail.com',
    phone: '+20 1013898149',
    location: 'Cairo, Egypt',
  },
};
