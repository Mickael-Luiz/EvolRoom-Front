import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  dataForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    this.dataForm = this.fb.group({
      corporateName: [''],
      cnpj: [''],
      email: [''],
      telefone: [''],
      celular: ['']
    })
  }

  logar() {
    this.authService.logar()
    this.router.navigate(['/academic'])
  }


}
