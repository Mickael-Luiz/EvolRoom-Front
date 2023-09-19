import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  isLogged: boolean | void
  menuActivated: boolean = true

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    this.isLogged = this.authService.isLogged()
  }

  activateMenu() {
    this.menuActivated = !this.menuActivated
  }

  deslogar() {
    this.isLogged = this.authService.deslogar()
    this.router.navigate(["/initial"])
  }



}
