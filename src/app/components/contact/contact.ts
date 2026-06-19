import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  contactForm: FormGroup;
  submitted = signal(false);
  success = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted.set(true);
    if (this.contactForm.valid) {
      // Simulate form submission
      console.log('Form submitted:', this.contactForm.value);
      setTimeout(() => {
        this.success.set(true);
        this.contactForm.reset();
        this.submitted.set(false);
        setTimeout(() => this.success.set(false), 3000);
      }, 500);
    }
  }
}
