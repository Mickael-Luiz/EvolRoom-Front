import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AccessModule } from 'src/app/modules/access/access.module';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from '../menu/menu.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AccessModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
