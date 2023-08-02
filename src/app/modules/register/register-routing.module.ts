import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionRegisterComponent } from './institution-register/institution-register.component';

const routes: Routes = [
  {path: 'instituteregister', component: InstitutionRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
