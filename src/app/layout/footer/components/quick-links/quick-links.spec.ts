import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { QuickLinks } from './quick-links';
import { QuickLinkModel } from '../../footer.model';

describe('QuickLinks (Zoneless)', () => {
  let component: QuickLinks;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickLinks],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickLinks);
    fixture.componentRef.setInput('quickLinks', [
      { label: 'Home', route: '/' },
      { label: 'About', route: '/about' },
    ]);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have quickLinks input signal defined', () => {
    expect(component.quickLinks).toBeDefined();
  });

  it('should accept quickLinks data', () => {
    const links: QuickLinkModel[] = [
      { label: 'Home', route: '/' },
      { label: 'About', route: '/about' },
    ];
    fixture.componentRef.setInput('quickLinks', links);
    fixture.detectChanges();
    expect(component.quickLinks()).toEqual(links);
  });
});
