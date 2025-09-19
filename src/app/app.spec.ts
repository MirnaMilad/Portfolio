import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { Navbar } from './layout/navbar/navbar';

@Component({
  standalone: true,
  template: `<app-navbar></app-navbar>`,
  imports: [Navbar],
})
class HostComponent {}

describe('HostComponent (with Navbar)', () => {
  let fixture: ComponentFixture<HostComponent>;
  let component: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideLocationMocks(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the host component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Navbar inside the host', () => {
    const navbar = fixture.debugElement.query(By.directive(Navbar));
    expect(navbar).toBeTruthy();
  });

  it('should render correct nav items', () => {
    const navLinks = fixture.debugElement
      .queryAll(By.css('.nav-link'))
      .map(el => el.nativeElement.textContent.trim());

    expect(navLinks).toContain('Home');
  });
});
