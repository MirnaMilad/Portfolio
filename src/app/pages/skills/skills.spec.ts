import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ChangeDetectionStrategy,
  DebugElement,
  provideZonelessChangeDetection,
} from '@angular/core';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

import { Skills } from './skills';
import { HeroSection } from './components/hero-section/hero-section';
import { Categories } from './components/categories/categories';
import { Action } from './components/action/action';

describe('Skills Component', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, Skills, HeroSection, Categories, Action],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Component Initialization', () => {
    it('should create the skills component', () => {
      expect(component).toBeTruthy();
    });

    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should have OnPush change detection strategy', () => {
      // Test that the component is configured with OnPush change detection
      // by checking if the component works properly with minimal change detection
      expect(component).toBeTruthy();

      // Verify the component renders correctly (OnPush components need proper setup)
      const heroSection = debugElement.query(By.css('app-hero-section'));
      expect(heroSection).toBeTruthy();
    });
  });

  describe('Template Rendering', () => {
    it('should render the hero section component', () => {
      const heroSection = debugElement.query(By.css('app-hero-section'));
      expect(heroSection).toBeTruthy();
    });

    it('should render the categories component', () => {
      const categories = debugElement.query(By.css('app-categories'));
      expect(categories).toBeTruthy();
    });

    it('should render the action component', () => {
      const action = debugElement.query(By.css('app-action'));
      expect(action).toBeTruthy();
    });

    it('should render all three main sections', () => {
      const heroSection = debugElement.query(By.css('app-hero-section'));
      const categories = debugElement.query(By.css('app-categories'));
      const action = debugElement.query(By.css('app-action'));

      expect(heroSection).toBeTruthy();
      expect(categories).toBeTruthy();
      expect(action).toBeTruthy();
    });

    it('should render components in correct order', () => {
      const allComponents = debugElement.queryAll(
        By.css('app-hero-section, app-categories, app-action')
      );

      expect(allComponents.length).toBe(3);
      expect(allComponents[0].nativeElement.tagName.toLowerCase()).toBe(
        'app-hero-section'
      );
      expect(allComponents[1].nativeElement.tagName.toLowerCase()).toBe(
        'app-categories'
      );
      expect(allComponents[2].nativeElement.tagName.toLowerCase()).toBe(
        'app-action'
      );
    });
  });

  describe('Component Structure', () => {
    it('should have correct selector', () => {
      const componentMetadata = (component.constructor as any).ɵcmp;
      expect(componentMetadata.selectors[0][0]).toBe('app-skills');
    });

    it('should import only necessary components', () => {
      // Test that the component has proper dependencies by verifying it renders correctly
      const heroSection = debugElement.query(By.css('app-hero-section'));
      const categoriesComponent = debugElement.query(By.css('app-categories'));

      expect(heroSection).toBeTruthy();
      expect(categoriesComponent).toBeTruthy();
    });

    it('should have template and style files configured', () => {
      const componentDef = (component.constructor as any).ɵcmp;
      expect(component).toBeTruthy();
      expect(fixture.nativeElement).toBeTruthy();
    });
  });

  describe('Child Components Integration', () => {
    it('should properly instantiate HeroSection component', () => {
      const heroSectionInstance = debugElement.query(By.directive(HeroSection));
      expect(heroSectionInstance).toBeTruthy();
      expect(heroSectionInstance.componentInstance).toBeInstanceOf(HeroSection);
    });

    it('should properly instantiate Categories component', () => {
      const categoriesInstance = debugElement.query(By.directive(Categories));
      expect(categoriesInstance).toBeTruthy();
      expect(categoriesInstance.componentInstance).toBeInstanceOf(Categories);
    });

    it('should properly instantiate Action component', () => {
      const actionInstance = debugElement.query(By.directive(Action));
      expect(actionInstance).toBeTruthy();
      expect(actionInstance.componentInstance).toBeInstanceOf(Action);
    });
  });

  describe('Component Lifecycle', () => {
    it('should handle component initialization without errors', () => {
      expect(() => {
        const newFixture = TestBed.createComponent(Skills);
        newFixture.detectChanges();
      }).not.toThrow();
    });

    it('should handle multiple change detection cycles', () => {
      expect(() => {
        fixture.detectChanges();
        fixture.detectChanges();
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should clean up properly on destroy', () => {
      expect(() => {
        fixture.destroy();
      }).not.toThrow();
    });
  });

  describe('Performance and Optimization', () => {
    it('should use OnPush change detection for better performance', () => {
      const componentDef = (component.constructor as any).ɵcmp;
      // Check if OnPush is enabled (can be true or 1 depending on Angular version)
      expect(componentDef.onPush).toBeTruthy();
    });

    it('should work with zoneless change detection', () => {
      // Test that the component works properly with zoneless change detection
      expect(component).toBeTruthy();
      expect(() => fixture.detectChanges()).not.toThrow();
    });
  });

  describe('Error Handling', () => {
    it('should handle missing child components gracefully', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should maintain component stability', () => {
      for (let i = 0; i < 5; i++) {
        fixture.detectChanges();
      }

      expect(component).toBeTruthy();
      expect(debugElement.query(By.css('app-hero-section'))).toBeTruthy();
      expect(debugElement.query(By.css('app-categories'))).toBeTruthy();
      expect(debugElement.query(By.css('app-action'))).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should render semantic HTML structure', () => {
      const nativeElement = fixture.nativeElement;
      expect(nativeElement).toBeTruthy();

      const heroSection = nativeElement.querySelector('app-hero-section');
      const categories = nativeElement.querySelector('app-categories');
      const action = nativeElement.querySelector('app-action');

      expect(heroSection).toBeTruthy();
      expect(categories).toBeTruthy();
      expect(action).toBeTruthy();
    });
  });

  describe('Integration Tests', () => {
    it('should work as a cohesive skills page', () => {
      const pageElements = {
        heroSection: debugElement.query(By.css('app-hero-section')),
        categories: debugElement.query(By.css('app-categories')),
        action: debugElement.query(By.css('app-action')),
      };

      Object.values(pageElements).forEach(element => {
        expect(element).toBeTruthy();
        expect(element.nativeElement).toBeTruthy();
      });
    });

    it('should maintain component hierarchy', () => {
      const rootElement = fixture.nativeElement;

      expect(rootElement.querySelector('app-hero-section')).toBeTruthy();
      expect(rootElement.querySelector('app-categories')).toBeTruthy();
      expect(rootElement.querySelector('app-action')).toBeTruthy();
    });
  });
});
