import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { Navbar } from './navbar';
import { RouterTestingModule } from '@angular/router/testing';

// Mock bootstrap object
declare const window: any;

describe('Navbar (zoneless)', () => {
  let fixture: ComponentFixture<Navbar>;
  let component: Navbar;

  beforeEach(async () => {
    // Mock bootstrap object
    window.bootstrap = {
      Offcanvas: {
        getInstance: jasmine.createSpy('getInstance').and.returnValue({
          hide: jasmine.createSpy('hide'),
        }),
      },
      Collapse: {
        getInstance: jasmine.createSpy('getInstance').and.returnValue({
          hide: jasmine.createSpy('hide'),
        }),
      },
    };

    await TestBed.configureTestingModule({
      imports: [Navbar, RouterTestingModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;

    component.navItems = [
      { label: 'Home', link: '/home' },
      { label: 'About', link: '/about' },
      { label: 'Contact', link: '/contact' },
    ];

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all nav items in mobile sidebar', () => {
    const mobileLinks = fixture.debugElement
      .queryAll(By.css('#mobileSidebar .nav-link'))
      .map(el => el.nativeElement.textContent.trim());

    expect(mobileLinks).toEqual(['Home', 'About', 'Contact']);
  });

  it('should render all nav items in desktop sidebar', () => {
    const desktopLinks = fixture.debugElement
      .queryAll(By.css('.sidebar .nav-link'))
      .map(el => el.nativeElement.textContent.trim());

    expect(desktopLinks).toEqual(['Home', 'About', 'Contact']);
  });

  it('should use correct hrefs for each nav item', () => {
    const allLinks = fixture.debugElement.queryAll(By.css('.nav-link'));

    component.navItems.forEach(item => {
      const match = allLinks.find(
        link => link.nativeElement.getAttribute('href') === item.link
      );
      expect(match).withContext(`${item.label} link missing`).toBeTruthy();
    });
  });

  it('should call closeOffcanvas method', () => {
    spyOn(component, 'closeOffcanvas').and.callThrough();

    component.closeOffcanvas();

    expect(component.closeOffcanvas).toHaveBeenCalled();
  });

  it('should have a toggle button for mobile sidebar', () => {
    const toggleBtn = fixture.debugElement.query(By.css('.navbar-toggler'));
    expect(toggleBtn).toBeTruthy();
    expect(toggleBtn.attributes['data-bs-target']).toBe('#mobileSidebar');
  });

  it('should have a close button inside mobile sidebar', () => {
    const closeBtn = fixture.debugElement.query(
      By.css('#mobileSidebar .btn-close')
    );
    expect(closeBtn).toBeTruthy();
    expect(closeBtn.attributes['data-bs-dismiss']).toBe('offcanvas');
  });

  it('should close offcanvas when closeOffcanvas is called', () => {
    fixture.detectChanges();

    component.closeOffcanvas();

    expect(window.bootstrap.Offcanvas.getInstance).toHaveBeenCalled();
  });
});
