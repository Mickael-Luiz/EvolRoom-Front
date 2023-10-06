import { appEvents } from './../utils/app-events';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  isLogged: boolean | void = false
  menuActivated: boolean = true

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    appEvents.add(appEvents.keys.verifyLogin, () => this.verifyLogin())
    this.verifyLogin();
  }

  verifyLogin() {
    this.isLogged = this.authService.isLogged()
    this.menuActivated = this.isLogged
  }

  activateMenu() {
    this.menuActivated = !this.menuActivated
  }

  deslogar() {
    this.isLogged = this.authService.deslogar()
    this.router.navigate(['/initial/login'])
  }



}
