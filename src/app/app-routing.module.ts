import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'initial'
  },
  {
    path: 'initial', loadChildren: () => import('./modules/access/access.module').then(m => m.AccessModule)
  },
  {
    path: 'evolgames', loadChildren: () => import('./modules/evol-games/evol-games.module').then(m => m.EvolGamesModule)
  },
  {
    path: 'academic', loadChildren: () => import('./modules/academic/academic.module').then(m => m.AcademicModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
