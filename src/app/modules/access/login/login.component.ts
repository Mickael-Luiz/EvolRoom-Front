import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  logar() {
    this.authService.logar()
    this.router.navigate(['/academic'])
  }

}
