import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/shared/core.module';


import { AccessRoutingModule } from './access-routing.module';
import { InitialComponent } from './initial/initial.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    InitialComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    CoreModule,
  ]
})
export class AccessModule { }
