import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { UiModule } from 'src/app/components/ui/ui.module';
import { ROUTES } from 'src/app/services/navigation/navigation.constants';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, LayoutModule, UiModule],
})
export class HomePage {
  newClientRoute = ROUTES.NEW_CLIENT;
  newAttendRoute = ROUTES.NEW_ATTEND;
  
  constructor(private navigationSrv: NavigationService) {}

  goTo(link: string) {
    this.navigationSrv.goTo(link);
  }
}
