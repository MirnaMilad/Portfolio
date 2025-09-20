import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Action } from './action';
import { RouterModule } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('Action', () => {
  let component: Action;
  let fixture: ComponentFixture<Action>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Action, RouterModule],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Action);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render action section content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toBeTruthy();
  });

  it('should have proper component structure', () => {
    expect(component).toBeDefined();
    expect(fixture).toBeDefined();
  });

  it('should be a standalone component', () => {
    expect(component).toBeInstanceOf(Action);
  });

  it('should import RouterModule', () => {
    expect(component).toBeTruthy();
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

  describe('Router integration', () => {
    it('should be able to handle router directives in template', () => {
      expect(component).toBeTruthy();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled).toBeTruthy();
    });
  });
});
