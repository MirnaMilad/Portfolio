import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Skills } from './skills';
import { Categories } from './components/categories/categories';

describe('Skills (Zoneless)', () => {
  let component: Skills;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills, Categories],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    const fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
