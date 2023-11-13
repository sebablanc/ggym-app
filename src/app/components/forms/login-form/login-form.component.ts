import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/loginModel';
import { createPasswordStrengthValidator } from 'src/app/validators/passwordStrength.validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent  implements OnInit {
  @Output('data') sendData: EventEmitter<LoginModel> = new EventEmitter();
  @Input('errorMessage') error = "";
  @Input('labelButton') lblBtn = "commons.buttons.login";
  @Input() showVerifier: Boolean = false;

  loginForm = this.fb.nonNullable.group({
    user: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, createPasswordStrengthValidator(), Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  loginHandler() {
    if(this.loginForm.value.user && this.loginForm.value.pass){
      this.sendData.emit({
        email: this.loginForm.value.user,
        password: this.loginForm.value.pass
      });
    }
  }

}
