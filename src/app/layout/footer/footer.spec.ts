import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Footer } from './footer';
import {
  FOOTER_CONFIG,
  QUICK_LINKS,
  FOOTER_SKILLS,
  CONTACT_INFO,
} from './footer.config';

describe('Footer (Zoneless)', () => {
  let component: Footer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize socialLinks from FOOTER_CONFIG', () => {
    expect(component.socialLinks).toEqual(FOOTER_CONFIG);
  });

  it('should initialize quickLinks from QUICK_LINKS', () => {
    expect(component.quickLinks).toEqual(QUICK_LINKS);
  });

  it('should initialize skills from FOOTER_SKILLS', () => {
    expect(component.skills).toEqual(FOOTER_SKILLS);
  });

  it('should initialize contactInfo from CONTACT_INFO', () => {
    expect(component.contactInfo).toEqual(CONTACT_INFO);
  });
});
