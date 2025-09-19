import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { Footer } from './footer';

describe('Footer (zoneless)', () => {
  let fixture: ComponentFixture<Footer>;
  let component: Footer;

  // Make testLinks match the exact URLs you want to assert
  const testLinks = [
    { icon: 'bi-facebook', url: 'https://web.facebook.com/miro.milad.5/' },
    { icon: 'bi-whatsapp', url: 'https://wa.me/201013898149' },
    {
      icon: 'bi-linkedin',
      url: 'https://www.linkedin.com/in/mirna-milad-a802b3266/',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    component.socialLinks = testLinks;
    fixture.detectChanges();
  });

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all social links', () => {
    const links = fixture.debugElement.queryAll(By.css('a'));
    expect(links.length).toBe(testLinks.length);

    links.forEach((link, i) => {
      expect(link.nativeElement.getAttribute('href')).toBe(testLinks[i].url);
    });
  });
});
