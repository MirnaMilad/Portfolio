import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { Intro } from './components/intro/intro';

@Component({
  standalone: true,
  template: `<app-intro></app-intro>`,
  imports: [Intro],
})
class HostComponent {}

describe('HostComponent (with IntroComponent)', () => {
  let fixture: ComponentFixture<HostComponent>;
  let component: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the host component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the IntroComponent inside the host', () => {
    const intro = fixture.debugElement.query(By.directive(Intro));
    expect(intro).toBeTruthy();
  });
});
