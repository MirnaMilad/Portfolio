import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';

import { Navbar } from './layout/navbar/navbar';
import { App } from './app';
import { Footer } from './layout/footer/footer';

describe('App (zoneless)', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, Navbar, Footer],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideLocationMocks(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render Navbar', () => {
    const navbar = fixture.debugElement.query(By.directive(Navbar));
    expect(navbar).toBeTruthy();
  });

  it('should render Footer', () => {
    const footer = fixture.debugElement.query(By.directive(Footer));
    expect(footer).toBeTruthy();
  });
});
