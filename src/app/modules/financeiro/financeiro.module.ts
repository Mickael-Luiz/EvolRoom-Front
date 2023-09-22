import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { FinanceiroHomeComponent } from './financeiro-home/financeiro-home.component';


@NgModule({
  declarations: [
    FinanceiroHomeComponent
  ],
  imports: [
    CommonModule,
    FinanceiroRoutingModule
  ]
})
export class FinanceiroModule { }
