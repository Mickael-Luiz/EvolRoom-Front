import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdugamesRoutingModule } from './edugames-routing.module';
import { EdugamesHomeComponent } from './edugames-home/edugames-home.component';


@NgModule({
  declarations: [
    EdugamesHomeComponent,
  ],
  imports: [
    CommonModule,
    EdugamesRoutingModule
  ]
})
export class EdugamesModule { }
