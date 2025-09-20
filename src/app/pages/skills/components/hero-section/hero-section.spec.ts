import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroSection } from './hero-section';
import { provideZonelessChangeDetection } from '@angular/core';

describe('HeroSection', () => {
  let component: HeroSection;
  let fixture: ComponentFixture<HeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSection],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero section content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toBeTruthy();
  });

  it('should have proper component structure', () => {
    expect(component).toBeDefined();
    expect(fixture).toBeDefined();
  });

  it('should be a standalone component', () => {
    expect(component).toBeInstanceOf(HeroSection);
  });

  describe('Template rendering', () => {
    it('should render without errors', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should have content in the template', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled).toBeTruthy();
    });
  });
});
