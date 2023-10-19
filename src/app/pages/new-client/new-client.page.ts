import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CustomFormsModule } from 'src/app/components/forms/forms.module';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { HEADER_TYPES } from 'src/app/components/ui/header/header.interfaces';
import { ClientModel } from 'src/app/models/clientModel';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ClientService } from 'src/app/services/client/client.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
  standalone: true,
  imports: [CommonModule, LayoutModule, CustomFormsModule]
})
export class NewClientPage implements OnInit {
  clientFinded: ClientModel | null = null;
  headerType = HEADER_TYPES.BACK;
  searching = false;

  constructor(
    private alertSrv: AlertService,
    private clientSrv: ClientService,
    private activatedRoute: ActivatedRoute,
    private navigationSrv: NavigationService,
    private translateSrv: TranslateService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      if (data && data.get('id') && parseInt(data.get('id') || '0') > 0) {
        this.searching = true;
        this.clientSrv.getById(data.get('id') || '').subscribe(data => {
          this.searching = false;
          if(data.success){
            this.clientFinded = data.clients[0];
          }
        });
      }
    })
  }

  saveClient(client: ClientModel) {
    this.alertSrv.okCancelAlert(
      this.translateSrv.instant('pages.newClient.alerts.okCancelAlert.title'),
      this.translateSrv.instant('pages.newClient.alerts.okCancelAlert.message'))
      .then(data => {
        if (data) this.callSaveCliente(client);
      })
  }

  callSaveCliente(client: ClientModel) {
    this.clientSrv.save(client).subscribe(data => {
      let title = 'commons.error';
      let message =  data.message;

      if (data && data.success) {
        title = 'commons.success';
        this.clientSrv.refreshClienteList();
      }

      this.alertSrv.okAlert(this.translateSrv.instant(title), message);
      
    })
  }

  goBack() { this.navigationSrv.goHome() }
}
