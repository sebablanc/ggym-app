import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomFormsModule } from 'src/app/components/forms/forms.module';
import { LoginModel } from 'src/app/models/loginModel';
import { LoginService } from 'src/app/services/login/login.service';
import { SessionService } from 'src/app/services/session/session.service';
import { LoginResponseModel } from 'src/app/models/loginResponseModel';
import { UiModule } from 'src/app/components/ui/ui.module';
import { COMMON_BUTTON_TYPES } from 'src/app/components/ui/common-button/common-button.interfaces';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ROUTES } from 'src/app/services/navigation/navigation.constants';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CustomFormsModule, UiModule]
})
export class LoginPage implements OnInit {
  error = "";
  registerButtonType = COMMON_BUTTON_TYPES.SECONDARY;
  forgotPassButtonType = COMMON_BUTTON_TYPES.LINK;
  registerRoute = ROUTES.REGISTER;
  forgotPasswordRoute = ROUTES.FORGOT_PASSWORD;

  constructor(
    private loginSrv: LoginService,
    private navigationSrv: NavigationService,
    private sessionSrv: SessionService,
    private userSrv: UserService
  ) { }

  ngOnInit() {
  }

  login(userData: LoginModel) {
    this.loginSrv.login(userData).subscribe(
      (data) => this.continueWithLogin(data)
    );
  }

  private continueWithLogin(data: LoginResponseModel) {
    this.error = '';
    if (data.success) {
      this.sessionSrv.setSession(data.token, data.expirationIn);
      this.userSrv.getUserRoles();
      this.navigationSrv.goHome();
    } else {
      this.error = data.message
    }
  }

  goTo(link: string) {
    this.navigationSrv.goTo(link);
  }
}
