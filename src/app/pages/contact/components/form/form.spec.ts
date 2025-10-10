import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideZonelessChangeDetection } from '@angular/core';
import { ContactFormComponent } from './form';
import emailjs from '@emailjs/browser';

describe('ContactFormComponent (Zoneless)', () => {
  let component: ContactFormComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ContactFormComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    const fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with required controls', () => {
    const controls = component.contactForm.controls;
    expect(controls['name']).toBeDefined();
    expect(controls['email']).toBeDefined();
    expect(controls['subject']).toBeDefined();
    expect(controls['message']).toBeDefined();
  });

  it('should mark all controls as touched if form invalid on submit', async () => {
    spyOn(component.contactForm, 'markAllAsTouched');
    await component.onSubmit();
    expect(component.contactForm.markAllAsTouched).toHaveBeenCalled();
  });

  it('should call emailjs.send when form is valid', async () => {
    const sendSpy = spyOn(emailjs, 'send').and.returnValue(
      Promise.resolve({ status: 200, text: 'OK' })
    );
    component.contactForm.setValue({
      name: 'John',
      email: 'john@example.com',
      subject: 'Test',
      message: 'Hello',
    });
    await component.onSubmit();
    expect(sendSpy).toHaveBeenCalled();
    expect(component.isSuccess).toBeTrue();
  });

  it('should handle email sending error', async () => {
    spyOn(emailjs, 'send').and.returnValue(Promise.reject('Error'));
    component.contactForm.setValue({
      name: 'John',
      email: 'john@example.com',
      subject: 'Test',
      message: 'Hello',
    });
    await component.onSubmit();
    expect(component.isSuccess).toBeFalse();
    expect(component.statusMessage).toContain('Failed');
  });
});
