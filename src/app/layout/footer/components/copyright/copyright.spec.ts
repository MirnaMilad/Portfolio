import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Copyright } from './copyright';

describe('Copyright (Zoneless)', () => {
  let component: Copyright;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Copyright],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    const fixture = TestBed.createComponent(Copyright);
    component = fixture.componentInstance;
    fixture.changeDetectorRef.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currentYear to the current year', () => {
    expect(component.currentYear).toBe(new Date().getFullYear());
  });
});
