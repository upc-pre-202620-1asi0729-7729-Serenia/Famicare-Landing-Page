import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe, IconComponent],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSection implements OnInit {
  contactForm!: FormGroup;

  submitted = signal(false);
  sending = signal(false);
  sendFailed = signal(false);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get showEmailError(): boolean {
    const email = this.contactForm.get('email');
    return !!email && email.invalid && email.touched;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    if (this.sending()) return;

    const serviceID  = 'service_8z4yvrk';
    const templateID = 'template_muervr3';
    const publicKey  = '6RLuwrQZ4Qh9K4vh4';

    this.sending.set(true);
    this.sendFailed.set(false);

    emailjs.send(serviceID, templateID, {
      from_name:  'Famicare · Acceso anticipado',
      from_email: this.contactForm.value.email,
      message:    'Solicitud de acceso anticipado a Famicare.',
    }, publicKey).then(
      () => {
        this.sending.set(false);
        this.submitted.set(true);
        this.contactForm.reset();
      },
      (err) => {
        console.error('EmailJS error', err);
        this.sending.set(false);
        this.sendFailed.set(true);
      }
    );
  }
}
