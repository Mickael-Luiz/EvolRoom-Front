import { Injectable } from '@angular/core';
import { appEvents } from '../shared/app-events';

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
