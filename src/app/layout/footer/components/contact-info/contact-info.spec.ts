import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ContactInfo } from './contact-info';
import { ContactInfoModel, SocialLinkModel } from '../../footer.model';

describe('ContactInfo (Zoneless)', () => {
  let component: ContactInfo;
  let fixture: any;

  const mockContactInfo: ContactInfoModel[] = [
    {
      label: 'Email',
      value: 'test@example.com',
      icon: 'bi-envelope',
      link: 'mailto:test@example.com',
    },
    { label: 'Phone', value: '+1234567890', icon: 'bi-phone' },
  ];

  const mockSocialLinks: SocialLinkModel[] = [
    { icon: 'bi-facebook', url: 'https://facebook.com' },
    { icon: 'bi-twitter', url: 'https://twitter.com' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInfo],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactInfo);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('contactInfo', mockContactInfo);
    fixture.componentRef.setInput('socialLinks', mockSocialLinks);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set contactInfo correctly', () => {
    expect(component.contactInfo()).toEqual(mockContactInfo);
  });

  it('should set socialLinks correctly', () => {
    expect(component.socialLinks()).toEqual(mockSocialLinks);
  });
});
