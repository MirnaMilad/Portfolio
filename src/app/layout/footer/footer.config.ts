import {
  ContactInfoModel,
  QuickLinkModel,
  SkillModel,
  SocialLinkModel,
} from './footer.model';

export const FOOTER_CONFIG: SocialLinkModel[] = [
  { icon: 'bi-facebook', url: 'https://web.facebook.com/miro.milad.5/' },
  { icon: 'bi-whatsapp', url: 'https://wa.me/201013898149' },
  {
    icon: 'bi-linkedin',
    url: 'https://www.linkedin.com/in/mirna-milad-frontend-developer/',
  },
  { icon: 'bi-github', url: 'https://github.com/MirnaMilad' },
];

export const QUICK_LINKS: QuickLinkModel[] = [
  { label: 'Home', route: '/' },
  { label: 'Skills', route: '/skills' },
  { label: 'Projects', route: '/projects' },
  { label: 'Contact', route: '/contact' },
];

export const FOOTER_SKILLS: SkillModel[] = [
  { name: 'Angular' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'Bootstrap' },
];

export const CONTACT_INFO: ContactInfoModel[] = [
  {
    icon: 'bi-envelope',
    label: 'Email',
    value: 'mirnamilad0101@gmail.com',
    link: 'mailto:mirnamilad0101@gmail.com',
  },
  {
    icon: 'bi-telephone',
    label: 'Phone',
    value: '+20 101 389 8149',
    link: 'tel:+201013898149',
  },
  {
    icon: 'bi-geo-alt',
    label: 'Location',
    value: 'Egypt',
  },
];
