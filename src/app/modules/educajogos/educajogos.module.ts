import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducajogosRoutingModule } from './educajogos-routing.module';
import { EducajogosHomeComponent } from './educajogos-home/educajogos-home.component';


@NgModule({
  declarations: [
    EducajogosHomeComponent
  ],
  imports: [
    CommonModule,
    EducajogosRoutingModule
  ]
})
export class EducajogosModule { }
