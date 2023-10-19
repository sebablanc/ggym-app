import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  @Output('data') sendData: EventEmitter<string> = new EventEmitter();

  emailForm = this.fb.nonNullable.group({
    user: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  recoverHandler() {
    if (this.emailForm.value.user) {
      this.sendData.emit(this.emailForm.value.user);
    }
  }

}
