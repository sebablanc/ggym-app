import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { ATTENDS_ACTION, DELETE_ACTION, EDIT_ACTION } from 'src/app/components/ui/client-card/client-card.models';
import { UiModule } from 'src/app/components/ui/ui.module';
import { ClientModel } from 'src/app/models/clientModel';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ClientService } from 'src/app/services/client/client.service';
import { ClientSingletonService } from 'src/app/services/clientsSingleton/client-singleton.service';
import { ROUTES } from 'src/app/services/navigation/navigation.constants';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [CommonModule, LayoutModule, UiModule]
})
export class ClientsPage implements OnInit {
  clientesList: ClientModel[] = [];
  subscribed: Subscription = new Subscription();
  clientes$: Observable<ClientModel[]> = new Observable();
  newClientRoute = ROUTES.NEW_CLIENT;
  clientAttendsRoute = ROUTES.CLIENT_ATTENDS;

  constructor(
    private clientSingletonSrv: ClientSingletonService,
    private clienteSrv: ClientService,
    private alertSrv: AlertService,
    private navigationSrv: NavigationService,
    private translateSrv: TranslateService
  ) { }

  ngOnInit() {
    this.clienteSrv.refreshClienteList();
    this.clientes$ = this.clienteSrv.getClientes$();
    this.clientes$.subscribe(clientes => this.clientesList = clientes);
  }

  execute(data: {client: ClientModel, ev: string}) {
    let client = data.client;
    switch (data.ev) {
      case EDIT_ACTION:
        if(!client || !client.id) return;
        this.navigationSrv.goTo(`${this.newClientRoute}/${client && client.id}`);
        break;
      case ATTENDS_ACTION:
        if(client) this.clientSingletonSrv.setClient(client);
        this.navigationSrv.goTo(this.clientAttendsRoute);
        break;
      case DELETE_ACTION:
        this.confirmDelete(client);
        break;
    }
  }

  confirmDelete(client: ClientModel) {
    this.alertSrv.okCancelAlert(
      this.translateSrv.instant('pages.clients.alerts.confirmDelete.title'), 
      this.translateSrv.instant('pages.clients.alerts.confirmDelete.message', {name: client.name, lastName: client.lastName}))
    .then(data => {
      if(data) {
        this.deleteClient(client);
      }
    })
  }

  deleteClient(client: ClientModel) {
    if (client && client.id) {
      this.clienteSrv.delete(client && client.id).subscribe(data => {
        let title = 'commons.error';

        if (data && data.success) {
          title = 'commons.success';
          this.clienteSrv.refreshClienteList();
        }
        
        this.alertSrv.okAlert(this.translateSrv.instant(title), data.message)
      }
      )
    }
  }

}
