import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardCursoComponent } from '../components/card-curso/card-curso.component';

@NgModule({
  declarations: [
    CardCursoComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    MultiSelectModule
  ],
  exports: [
    ButtonModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    MultiSelectModule,
    CardCursoComponent
  ]
})
export class CoreModule { }
