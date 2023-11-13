import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { HEADER_TYPES } from 'src/app/components/ui/header/header.interfaces';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { CustomFormsModule } from 'src/app/components/forms/forms.module';
import { ChangePasswordModel } from 'src/app/models/changePasswordModel';
import { UserService } from 'src/app/services/user/user.service';
import { UserAccountService } from 'src/app/services/user-account/user-account.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpResponseModel } from 'src/app/models/httpResponseModel';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-recover-password-via-email',
  templateUrl: './recover-password-via-email.page.html',
  styleUrls: ['./recover-password-via-email.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LayoutModule, CustomFormsModule]
})
export class RecoverPasswordViaEmailPage implements OnInit {
  headerType = HEADER_TYPES.BACK;

  constructor(
    private navigationSrv: NavigationService,
    private userAccountSrv: UserAccountService,
    private alertSrv: AlertService,
    private translateSrv: TranslateService,
    private sessionSrv: SessionService) { }

  ngOnInit() {
  }

  goBack(){
    this.navigationSrv.goLogin();
  }

  changePassword(event: ChangePasswordModel) {
    this.userAccountSrv.changePass(event.password).subscribe(
      (data) => this.continueWithPasswordChanged(data)
    );
  }

  private continueWithPasswordChanged(data: HttpResponseModel) {
    if (data.success) {
      this.alertSrv.okAlert(
        this.translateSrv.instant('pages.register.alerts.okTitle'),
        this.translateSrv.instant(data.message)
      );
      this.sessionSrv.removeSession();
    }
  }

}
