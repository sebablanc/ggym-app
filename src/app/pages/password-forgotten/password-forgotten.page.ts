import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginResponseModel } from 'src/app/models/loginResponseModel';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { HEADER_TYPES } from 'src/app/components/ui/header/header.interfaces';
import { CustomFormsModule } from 'src/app/components/forms/forms.module';
import { AlertService } from 'src/app/services/alert/alert.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.page.html',
  styleUrls: ['./password-forgotten.page.scss'],
  standalone: true,
  imports: [CustomFormsModule, LayoutModule]
})
export class PasswordForgottenPage implements OnInit {
  headerType = HEADER_TYPES.BACK;

  constructor(
    private navigationSrv: NavigationService,
    private loginSrv: LoginService,
    private alertSrv: AlertService,
    private translateSrv: TranslateService
  ) { }

  ngOnInit() {
  }

  goBack() { this.navigationSrv.goLogin() }

  recoverPass(email: string) {
    this.loginSrv.recoverPass(email).subscribe(
      (data) => this.continueWithRegister(data)
    );
  }

  private continueWithRegister(data: LoginResponseModel) {
    if (data.success) {
      this.alertSrv.okAlert(this.translateSrv.instant('pages.register.alerts.okTitle'), data.message);
    }
  }

}
