import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/shared/core.module';
import { RegisterRoutingModule } from './register-routing.module';
import { InstitutionRegisterComponent } from './institution-register/institution-register.component';


@NgModule({
  declarations: [
    InstitutionRegisterComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
