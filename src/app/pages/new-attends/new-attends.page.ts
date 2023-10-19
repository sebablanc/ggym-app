import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { CustomFormsModule } from 'src/app/components/forms/forms.module';
import { AttendModel } from 'src/app/models/AttendModel';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AttendsService } from 'src/app/services/attend/attends.service';
import { HEADER_TYPES } from 'src/app/components/ui/header/header.interfaces';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-new-attends',
  templateUrl: './new-attends.page.html',
  styleUrls: ['./new-attends.page.scss'],
  standalone: true,
  imports: [LayoutModule, CustomFormsModule]
})
export class NewAttendsPage implements OnInit {
  headerType = HEADER_TYPES.BACK;

  constructor(
    private alertSrv: AlertService,
    private attendsSrv: AttendsService,
    private navigationSrv: NavigationService,
    private translateSrv: TranslateService
  ) { }

  ngOnInit() {
  }


  saveAttend(attend: AttendModel) {
    this.alertSrv.okCancelAlert(
      this.translateSrv.instant('pages.newClient.alerts.okCancelAlert.title'),
      this.translateSrv.instant('pages.newClient.alerts.okCancelAlert.message'))
      .then(data => {
        if (data) this.callSaveAttend(attend);
      })
  }

  callSaveAttend(attend: AttendModel) {
    this.attendsSrv.save(attend).subscribe(data => {
      let message =  data.message;
      let title = data && data.success ? 'commons.success' : 'commons.error';

      this.alertSrv.okAlert(this.translateSrv.instant(title), message);      
    })
  }

  
  goBack() { this.navigationSrv.goHome(); }

}
