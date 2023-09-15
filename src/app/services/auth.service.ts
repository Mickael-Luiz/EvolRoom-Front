import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logar() {
    localStorage.setItem("login", "sim");
  }

  deslogar() {
    localStorage.clear()
  }

  isLogged = () => !!localStorage.getItem("login")

}
