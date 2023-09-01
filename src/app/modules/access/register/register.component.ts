import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  dataForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      corporateName: [''],
      cnpj: [''],
      email: [''],
      telefone: [''],
      celular: ['']
    })
  }


}
