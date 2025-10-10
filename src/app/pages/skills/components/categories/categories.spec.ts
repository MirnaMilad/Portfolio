import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Categories } from './categories';
import { SKILLS_CATEGORIES } from './categories.config';

describe('Categories (Zoneless)', () => {
  let component: Categories;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categories],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    const fixture = TestBed.createComponent(Categories);
    component = fixture.componentInstance;
    fixture.changeDetectorRef.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize skillCategories correctly', () => {
    expect(component.skillCategories).toEqual(SKILLS_CATEGORIES);
  });
});
