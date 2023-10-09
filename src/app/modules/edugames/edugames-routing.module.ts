import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdugamesHomeComponent } from './edugames-home/edugames-home.component';

const routes: Routes = [
  {path: '', component: EdugamesHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdugamesRoutingModule { }
