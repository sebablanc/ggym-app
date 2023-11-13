import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { UiModule } from 'src/app/components/ui/ui.module';
import { UserAccountService } from 'src/app/services/user-account/user-account.service';
import { SessionService } from 'src/app/services/session/session.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-validate-register',
  templateUrl: './validate-register.page.html',
  styleUrls: ['./validate-register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, UiModule, TranslateModule]
})
export class ValidateRegisterPage implements OnInit {
  success: boolean | null = null;

  constructor(
    private userAccountSrv: UserAccountService,
    private navigationSrv: NavigationService,
    private sessionSrv: SessionService,
    private alertSrv: AlertService,
    private translateSrv: TranslateService) { }

  ngOnInit() {
    this.userAccountSrv.validateAccount().subscribe(data => {
      this.success = data.success;
      this.alertSrv.okAlert(
        this.translateSrv.instant(data.success ? 'pages.validateRegister.alerts.okTitle' : 'alerts.weAreSorryTitle'),
        this.translateSrv.instant(data.message)
      );
      if(data.success){
        this.sessionSrv.removeSession();
      }
    });
  }

  backToLogin() {
    this.navigationSrv.goLogin();
  }

}
