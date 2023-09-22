import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuporteRoutingModule } from './suporte-routing.module';
import { SuporteHomeComponent } from './suporte-home/suporte-home.component';


@NgModule({
  declarations: [
    SuporteHomeComponent
  ],
  imports: [
    CommonModule,
    SuporteRoutingModule
  ]
})
export class SuporteModule { }
