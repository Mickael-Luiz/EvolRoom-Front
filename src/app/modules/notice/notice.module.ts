import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeHomeComponent } from './notice-home/notice-home.component';


@NgModule({
  declarations: [
    NoticeHomeComponent
  ],
  imports: [
    CommonModule,
    NoticeRoutingModule
  ]
})
export class NoticeModule { }
