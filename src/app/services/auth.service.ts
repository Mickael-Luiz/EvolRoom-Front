import { appEvents } from './../shared/utils/app-events';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logar() {
    localStorage.setItem("login", "sim");
    appEvents.exec(appEvents.keys.verifyLogin);
  }

  deslogar() {
    localStorage.removeItem('login');
    appEvents.exec(appEvents.keys.verifyLogin);
  }

  isLogged = () => !!localStorage.getItem("login")

}
