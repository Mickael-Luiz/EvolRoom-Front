import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialHomeComponent } from './financial-home/financial-home.component';

const routes: Routes = [
  {
    path: '', component: FinancialHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
