import { Component } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-institution-register',
  templateUrl: './institution-register.component.html',
  styleUrls: ['./institution-register.component.scss']
})
export class InstitutionRegisterComponent {

  dataForm!: FormGroup;
  False: boolean = false;
  True: boolean = true

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
