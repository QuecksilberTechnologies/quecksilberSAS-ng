import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeader } from '@shared/components';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'qs-contact',
  imports: [
    PageHeader,
    CardModule,
    ReactiveFormsModule,
    MessageModule,
    AutoFocusModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
  ],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Contact implements OnInit {
  readonly #fb = inject(FormBuilder);
  readonly isSaving = signal<boolean>(false);
  protected contactForm!: FormGroup;

  async ngOnInit() {
    this.initForm();
  }

  // TODO: Add all validation
  initForm() {
    this.contactForm = this.#fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  isInvalid(controlName: string) {
    const control = this.contactForm.get(controlName);
    return control?.invalid && control.touched;
  }

  onSend() {
    console.log(this.contactForm.value);
  }
}
