import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/shared/core.module';
import { SelectButtonModule } from 'primeng/selectbutton';

import { EdugamesRoutingModule } from './edugames-routing.module';
import { EdugamesHomeComponent } from './edugames-home/edugames-home.component';


@NgModule({
  declarations: [
    EdugamesHomeComponent,
  ],
  imports: [
    CommonModule,
    EdugamesRoutingModule,
    CoreModule,
    SelectButtonModule
  ]
})
export class EdugamesModule { }
