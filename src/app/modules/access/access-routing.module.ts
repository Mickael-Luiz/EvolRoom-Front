import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { SubscriptionPlanComponent } from 'src/app/modules/access/subscription-plan/subscription-plan.component';

const routes: Routes = [
  {path: '', component: InitialComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
