import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChangePasswordModel } from 'src/app/models/changePasswordModel';
import { createPasswordStrengthValidator } from 'src/app/validators/passwordStrength.validator';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
})
export class ChangePasswordFormComponent  implements OnInit {
  @Output('data') sendData: EventEmitter<ChangePasswordModel> = new EventEmitter();
  
  changePasswordForm = this.fb.nonNullable.group({
    pass: ['', [Validators.required, createPasswordStrengthValidator(), Validators.minLength(8)]],
    repeteadPass: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  changePassHandler() {
    if(this.changePasswordForm.valid && this.changePasswordForm.value.pass){
      this.sendData.emit({
        password: this.changePasswordForm.value.pass
      });
    }
  }

}
