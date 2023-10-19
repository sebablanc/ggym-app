import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';
import { ROUTES } from 'src/app/services/navigation/navigation.constants';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  isAdmin = false;

  menuItems = [
    {label: 'menu.homeOption', icon: 'home-outline', clickParam: 'HOME', needAdmin: false},
    {label: 'menu.clientsOption', icon: 'people-outline', clickParam: 'CLIENTS', needAdmin: true},
    {label: 'menu.usersOption', icon: 'people-circle-outline', clickParam: 'USERS', needAdmin: true},
    {label: 'menu.logout', icon: 'log-out-outline', clickParam: 'LOGOUT', needAdmin: false}
  ];

  constructor(
    private menuController: MenuController,
    private navigationSrv: NavigationService,
    private loginSrv: LoginService,
    private userSrv: UserService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    const menuid = 'menu';
    this.menuController.enable(true, menuid);
    this.menuController.get(menuid).then(
      (thisMenu) => {
        if (thisMenu && thisMenu.className.includes('menu-pane-visible')) {
          thisMenu.className.replace('menu-pane-visible', '');
        }
    });
  }

  verifyRole() {
    this.isAdmin = this.userSrv.isAdmin();

  }

  navigate(param: string) {
    switch(param) {
      case 'HOME':
        this.navigationSrv.goHome();
        break;
      case 'CLIENTS':
        this.goTo(ROUTES.CLIENTS);
        break;
      case 'USERS':
        this.goTo(ROUTES.USERS);
        break;
      case 'LOGOUT':
        this.logout();
        break;
      default:
        break;
    }
  }

  goTo(route: string) {
    this.navigationSrv.goTo(route);
  }

  logout(){
    this.loginSrv.logout();
  }
}
