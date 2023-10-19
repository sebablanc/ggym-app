import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LoginService } from 'src/app/services/login/login.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseInterceptor implements HttpInterceptor {
  constructor(private alertSrv: AlertService, private loginSrv: LoginService, private navigationSrv: NavigationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(!event.body) {
              this.alertSrv.okAlert('¡Lo sentimos!', 'Tu sesión ha caducado. Volvé a ingresar.');
              this.loginSrv.logout();
            }
          }
          return event;
        },
        error: (error) => {
          switch (error.status) {
            case 504:
              this.alertSrv.okAlert('¡Lo sentimos!', 'En estos momentos nuestros servidores no están activos. Intentálo más tarde nuevamente')
              break;
            case 400:
              this.alertSrv.okAlert('¡Lo sentimos!', error.error.message);
              break;
            case 403:
              this.alertSrv.okAlert('¡Lo sentimos!', 'No tenés los permisos suficientes para ejecutar esta acción');
              break;
          }
        }
      }));
  }
}
