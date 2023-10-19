import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolesResponseModel } from 'src/app/models/rolesResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userRoles: string[] = [];

  private GET_ROLES_URL = '/user/get_roles';

  constructor(private http: HttpClient) { }

  getUserRoles() {
    return this.http.get<RolesResponseModel>(environment.baseUrl + this.GET_ROLES_URL).subscribe(
      data => {
        this.setRoles(data.roles);
      }
    );
  }

  setRoles(roles: string[]) {
    this.userRoles = roles;
  }

  getRoles() {
    return this.userRoles;
  }

  isAdmin() {
    return this.userRoles.includes('ADMIN');
  }
}
