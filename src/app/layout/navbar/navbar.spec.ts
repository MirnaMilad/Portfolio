import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Navbar } from './navbar';
import { NAV_ITEMS } from './navbar.config';

describe('Navbar (Zoneless)', () => {
  let component: Navbar;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have navItems defined from config', () => {
    expect(component.navItems).toEqual(NAV_ITEMS);
  });

  it('should call hide on offcanvas instance when closeOffcanvas is invoked', () => {
    const mockHide = jasmine.createSpy('hide');
    const mockInstance = { hide: mockHide };
    const element = document.createElement('div');
    element.id = 'mobileSidebar';
    document.body.appendChild(element);

    (globalThis as any).bootstrap = { Offcanvas: { getInstance: () => mockInstance } };

    component.closeOffcanvas();
    expect(mockHide).toHaveBeenCalled();

    document.body.removeChild(element);
    delete (globalThis as any).bootstrap;
  });

  it('should not throw if offcanvas element is missing', () => {
    spyOn(console, 'error');
    delete (globalThis as any).bootstrap;
    (globalThis as any).bootstrap = { Offcanvas: { getInstance: (_el?: any) => undefined } };
    expect(() => component.closeOffcanvas()).not.toThrow();
    delete (globalThis as any).bootstrap;
  });
});
