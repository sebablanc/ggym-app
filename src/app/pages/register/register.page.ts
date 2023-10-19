import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { CustomFormsModule } from 'src/app/components/forms/forms.module';
import { LoginModel } from 'src/app/models/loginModel';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginResponseModel } from 'src/app/models/loginResponseModel';
import { HEADER_TYPES } from 'src/app/components/ui/header/header.interfaces';
import { AlertService } from 'src/app/services/alert/alert.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LayoutModule, CustomFormsModule]
})
export class RegisterPage implements OnInit {
  error: string = '';
  headerType = HEADER_TYPES.BACK;

  constructor(
    private navigationSrv: NavigationService,
    private loginSrv: LoginService,
    private alertSrv: AlertService,
    private translateSrv: TranslateService
  ) { }

  ngOnInit() {
  }

  goBack() { this.navigationSrv.goLogin(); }

  register(userData: LoginModel) {
    this.loginSrv.register(userData).subscribe(
      (data) => this.continueWithRegister(data)
    );
  }

  private async continueWithRegister(data: LoginResponseModel) {
    if (data.success) {
      this.alertSrv.okAlert(
        this.translateSrv.instant('pages.register.alerts.okTitle'),
        this.translateSrv.instant('pages.register.alerts.okMessage')
      );
    } else {
      this.error = data.message
    }
  }
}
