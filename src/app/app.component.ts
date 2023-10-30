import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginService } from './services/login/login.service';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from './services/navigation/navigation.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class AppComponent implements OnInit {

  constructor(
    private translateSrv: TranslateService
  ) {}

  ngOnInit(){
    this.translatePage('es');
  }


  translatePage(lang: string) {
    this.translateSrv.setDefaultLang(lang);
    this.translateSrv.use(lang);
  }
}
