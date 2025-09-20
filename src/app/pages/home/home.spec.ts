import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home (zoneless)', () => {
  let fixture: ComponentFixture<Home>;
  let component: Home;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render greeting text', () => {
    const el = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(el.textContent).toContain('Hello there!');
  });

  it('should render resume download link', () => {
    const link: HTMLAnchorElement = fixture.debugElement.query(
      By.css('a.btn-warning')
    ).nativeElement;
    expect(link.getAttribute('href')).toContain(
      'Mirna_Milad_Frontend_developer_CV.pdf'
    );
    expect(link.getAttribute('download')).toBe('Mirna_Resume.pdf');
  });

  it('should have a routerLink to projects', () => {
    const projectsBtn = fixture.debugElement.query(
      By.css('a.btn.bg-transparent')
    );
    expect(projectsBtn).toBeTruthy();
  });

  it('should render the avatar image with alt text', () => {
    const img: HTMLImageElement = fixture.debugElement.query(
      By.css('img')
    ).nativeElement;
    expect(img.getAttribute('alt')).toBe('Intro Image'); // ✅ match template
    expect(img.getAttribute('src')).toContain('avatar.png');
  });
});
