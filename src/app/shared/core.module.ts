import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    PasswordModule
  ],
  exports: [
    ButtonModule,
    DialogModule,
    InputTextModule,
    PasswordModule
  ]
})
export class CoreModule { }
