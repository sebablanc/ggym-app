import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponseModel } from 'src/app/models/httpResponseModel';
import { LoginResponseModel } from 'src/app/models/loginResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  
  private VALIDATE_ACCOUNT_URL = '/user/validate_account';

  private RECOVER_PASS_URL = '/user/recovery_account';

  private CHANGE_PASS_URL = '/user/change_password';

  constructor(private http: HttpClient) { }

  validateAccount() {
    return this.http.post<LoginResponseModel>(environment.baseUrl + this.VALIDATE_ACCOUNT_URL, {});
  }

  recoverPass(user: string) {
    return this.http.post<LoginResponseModel>(environment.baseUrl + this.RECOVER_PASS_URL, { email: user });
  }

  changePass(pass: string) {
    return this.http.post<HttpResponseModel>(environment.baseUrl + this.CHANGE_PASS_URL, {email: '', password: pass})
  }
}
