import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportHomeComponent } from './support-home/support-home.component';

const routes: Routes = [
  {
    path: '', component: SupportHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
