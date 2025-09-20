import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Categories } from './categories';
import { SkillCategory } from './categories.model';
import { SKILLS_CATEGORIES } from './categories.config';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Categories', () => {
  let component: Categories;
  let fixture: ComponentFixture<Categories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categories],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Categories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have skill categories defined', () => {
    expect(component.skillCategories).toBeDefined();
    expect(Array.isArray(component.skillCategories)).toBe(true);
    expect(component.skillCategories.length).toBeGreaterThan(0);
  });

  it('should use SKILLS_CATEGORIES config data', () => {
    expect(component.skillCategories).toEqual(SKILLS_CATEGORIES);
  });

  it('should have valid skill category structure', () => {
    component.skillCategories.forEach((category: SkillCategory) => {
      expect(category.title).toBeDefined();
      expect(typeof category.title).toBe('string');
      expect(category.skills).toBeDefined();
      expect(Array.isArray(category.skills)).toBe(true);
    });
  });

  it('should have skills with proper proficiency levels', () => {
    const validProficiencyLevels = [
      'Expert',
      'Advanced',
      'Intermediate',
      'Beginner',
    ];

    component.skillCategories.forEach((category: SkillCategory) => {
      category.skills.forEach(skill => {
        expect(skill.name).toBeDefined();
        expect(typeof skill.name).toBe('string');
        if (skill.proficiency) {
          expect(validProficiencyLevels).toContain(skill.proficiency);
        }
      });
    });
  });

  describe('getCategoryIcon method', () => {
    it('should return correct icon for Frontend Technologies', () => {
      const result = component.getCategoryIcon('Frontend Technologies');
      expect(result).toBe('bi bi-code-square');
    });

    it('should return correct icon for Backend & APIs', () => {
      const result = component.getCategoryIcon('Backend & APIs');
      expect(result).toBe('bi bi-server');
    });

    it('should return correct icon for Development Tools', () => {
      const result = component.getCategoryIcon('Development Tools');
      expect(result).toBe('bi bi-tools');
    });

    it('should return correct icon for Development Practices', () => {
      const result = component.getCategoryIcon('Development Practices');
      expect(result).toBe('bi bi-diagram-3');
    });

    it('should return default icon for unknown category', () => {
      const result = component.getCategoryIcon('Unknown Category');
      expect(result).toBe('bi bi-gear');
    });
  });

  describe('getSkillCardClass method', () => {
    it('should return correct class for Expert proficiency', () => {
      const result = component.getSkillCardClass('Expert');
      expect(result).toBe('border-success bg-success bg-opacity-10');
    });

    it('should return correct class for Advanced proficiency', () => {
      const result = component.getSkillCardClass('Advanced');
      expect(result).toBe('border-warning bg-warning bg-opacity-10');
    });

    it('should return correct class for Intermediate proficiency', () => {
      const result = component.getSkillCardClass('Intermediate');
      expect(result).toBe('border-info bg-info bg-opacity-10');
    });

    it('should return correct class for Beginner proficiency', () => {
      const result = component.getSkillCardClass('Beginner');
      expect(result).toBe('border-primary bg-primary bg-opacity-10');
    });

    it('should return default class for undefined proficiency', () => {
      const result = component.getSkillCardClass();
      expect(result).toBe('border-light bg-light');
    });

    it('should return default class for unknown proficiency', () => {
      const result = component.getSkillCardClass('Unknown');
      expect(result).toBe('border-light bg-light');
    });
  });

  describe('getProficiencyWidth method', () => {
    it('should return 100 for Expert proficiency', () => {
      const result = component.getProficiencyWidth('Expert');
      expect(result).toBe(100);
    });

    it('should return 85 for Advanced proficiency', () => {
      const result = component.getProficiencyWidth('Advanced');
      expect(result).toBe(85);
    });

    it('should return 70 for Intermediate proficiency', () => {
      const result = component.getProficiencyWidth('Intermediate');
      expect(result).toBe(70);
    });

    it('should return 50 for Beginner proficiency', () => {
      const result = component.getProficiencyWidth('Beginner');
      expect(result).toBe(50);
    });

    it('should return 60 for undefined proficiency', () => {
      const result = component.getProficiencyWidth();
      expect(result).toBe(60);
    });

    it('should return 60 for unknown proficiency', () => {
      const result = component.getProficiencyWidth('Unknown');
      expect(result).toBe(60);
    });
  });

  describe('getProficiencyProgressClass method', () => {
    it('should return correct class for Expert proficiency', () => {
      const result = component.getProficiencyProgressClass('Expert');
      expect(result).toBe('bg-success');
    });

    it('should return correct class for Advanced proficiency', () => {
      const result = component.getProficiencyProgressClass('Advanced');
      expect(result).toBe('bg-warning');
    });

    it('should return correct class for Intermediate proficiency', () => {
      const result = component.getProficiencyProgressClass('Intermediate');
      expect(result).toBe('bg-info');
    });

    it('should return correct class for Beginner proficiency', () => {
      const result = component.getProficiencyProgressClass('Beginner');
      expect(result).toBe('bg-primary');
    });

    it('should return default class for undefined proficiency', () => {
      const result = component.getProficiencyProgressClass();
      expect(result).toBe('bg-secondary');
    });

    it('should return default class for unknown proficiency', () => {
      const result = component.getProficiencyProgressClass('Unknown');
      expect(result).toBe('bg-secondary');
    });
  });

  describe('Template rendering', () => {
    it('should render skill categories in the template', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toBeTruthy();
    });

    it('should have proper component structure', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled).toBeTruthy();
    });
  });
});
