import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/loginModel';
import { LoginResponseModel } from 'src/app/models/loginResponseModel';
import { environment } from 'src/environments/environment';
import { SessionService } from '../session/session.service';
import { isFuture, toDate } from 'date-fns';
import { UserService } from '../user/user.service';
import { NavigationService } from '../navigation/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private SIGN_IN_URL = '/auth/signin';

  private SIGN_UP_URL = '/auth/signup';

  private RECOVER_PASS_URL = '/auth/recover';

  constructor(
    private http: HttpClient,
    private sessionSrv: SessionService,
    private userSrv: UserService,
    private navigationSrv: NavigationService) { }

  register(user: LoginModel) {
    return this.http.post<LoginResponseModel>(environment.baseUrl + this.SIGN_UP_URL, user);
  }

  login(user: LoginModel) {
    return this.http.post<LoginResponseModel>(environment.baseUrl + this.SIGN_IN_URL, user);
  }

  recoverPass(user: string) {
    return this.http.post<LoginResponseModel>(environment.baseUrl + this.RECOVER_PASS_URL, { email: user });
  }

  logout() {
    this.sessionSrv.removeSession();
    this.userSrv.setRoles([]);
    this.navigationSrv.goLogin();
  }

  isLoggedIn() {
    if (!this.sessionSrv.getExpiration()) return false;
    const date = toDate(this.sessionSrv.getExpiration());
    return isFuture(date);
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
