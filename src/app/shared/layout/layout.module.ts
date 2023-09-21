import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AccessModule } from 'src/app/modules/access/access.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AccessModule
  ]
})
export class LayoutModule { }
