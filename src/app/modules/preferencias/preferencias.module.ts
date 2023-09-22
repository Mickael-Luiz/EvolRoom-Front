import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferenciasRoutingModule } from './preferencias-routing.module';
import { PreferenciasHomeComponent } from './preferencias-home/preferencias-home.component';


@NgModule({
  declarations: [
    PreferenciasHomeComponent
  ],
  imports: [
    CommonModule,
    PreferenciasRoutingModule
  ]
})
export class PreferenciasModule { }
