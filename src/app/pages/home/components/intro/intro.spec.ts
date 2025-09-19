import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { Intro } from './intro';

describe('Intro', () => {
  let fixture: ComponentFixture<Intro>;
  let component: Intro;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intro],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Intro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main headers', () => {
    const headers = fixture.debugElement.queryAll(By.css('.header'));
    expect(headers.length).toBe(2);
    expect(headers[0].nativeElement.textContent).toContain('Hi, I am Mirna');
    expect(headers[1].nativeElement.textContent).toContain(
      'A Frontend Developer'
    );
  });

  it('should render the description paragraph', () => {
    const description = fixture.debugElement.query(By.css('.description'));
    expect(description).toBeTruthy();
    expect(description.nativeElement.textContent).toContain(
      'I am a passionate frontend developer'
    );
  });

  it('should have a download resume button', () => {
    const button = fixture.debugElement.query(By.css('a.btn-primary'));
    expect(button).toBeTruthy();
    expect(button.attributes['href']).toBe(
      'assets/pdf/Mirna_Milad_Frontend_developer_CV.pdf'
    );
    expect(button.attributes['download']).toBe('Mirna_Resume.pdf');
  });

  it('should render the avatar image', () => {
    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeTruthy();
    expect(img.attributes['src']).toBe('assets/images/avatar.png');
    expect(img.attributes['alt']).toBe('Intro Image');
    expect(img.nativeElement.classList).toContain('rounded-circle');
  });
});
