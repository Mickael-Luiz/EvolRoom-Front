import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvisosRoutingModule } from './avisos-routing.module';
import { AvisosHomeComponent } from './avisos-home/avisos-home.component';


@NgModule({
  declarations: [
    AvisosHomeComponent
  ],
  imports: [
    CommonModule,
    AvisosRoutingModule
  ]
})
export class AvisosModule { }
