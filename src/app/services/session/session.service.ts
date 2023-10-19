import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(token: string, expiration: number){
    localStorage.setItem('token', token);
    localStorage.setItem('expires_at', expiration.toString());
  }

  removeSession(){
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  getExpiration() {
    return new Date(localStorage.getItem('expires_at') || ''); 
  }
}
