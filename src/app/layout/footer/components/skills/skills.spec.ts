import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Skills } from './skills';
import { SkillModel } from '../../footer.model';

describe('Skills (Zoneless)', () => {
  let component: Skills;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('skills', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have skills input signal defined', () => {
    expect(component.skills).toBeDefined();
  });

  it('should accept skills data', () => {
    const skillsData: SkillModel[] = [
      { name: 'Angular' },
      { name: 'TypeScript' },
    ];
    fixture.componentRef.setInput('skills', skillsData);
    fixture.detectChanges();
    expect(component.skills()).toEqual(skillsData);
  });
});
