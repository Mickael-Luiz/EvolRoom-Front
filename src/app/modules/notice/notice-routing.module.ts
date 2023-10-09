import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeHomeComponent } from './notice-home/notice-home.component';

const routes: Routes = [
  {
    path: '', component: NoticeHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule { }
