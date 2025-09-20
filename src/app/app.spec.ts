import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { App } from './app';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';

describe('AppComponent (zoneless)', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, Navbar, Footer],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
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

  it('should contain a router-outlet', () => {
    const outlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(outlet).toBeTruthy();
  });

  it('should wrap content inside a card with rounded-4 class', () => {
    const card = fixture.debugElement.query(By.css('.card.rounded-4'));
    expect(card).toBeTruthy();
  });

  it('should have a page-wrapper div with bg-warning', () => {
    const wrapper = fixture.debugElement.query(
      By.css('.page-wrapper.bg-warning')
    );
    expect(wrapper).toBeTruthy();
  });
});
