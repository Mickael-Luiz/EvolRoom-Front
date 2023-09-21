import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {

    }

  ngOnInit() {
    if (this.authService.isLogged())
      this.router.navigate(['/academic']);
  }

  logar() {
    this.authService.logar()
    this.router.navigate(['/academic'])
  }

}
