import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdugamesRoutingModule } from './edugames-routing.module';
import { EdugamesHomeComponent } from './edugames-home/edugames-home.component';
import { FinancialHomeComponent } from './financial-home/financial-home.component';


@NgModule({
  declarations: [
    EdugamesHomeComponent,
    FinancialHomeComponent
  ],
  imports: [
    CommonModule,
    EdugamesRoutingModule
  ]
})
export class EdugamesModule { }
