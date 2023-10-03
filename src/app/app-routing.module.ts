import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { AuthGuardReverse } from './guards/auth-guard-reverse';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'initial'
  },
  {
    path: 'initial', loadChildren: () => import('./modules/access/access.module').then(m => m.AccessModule), canActivate: [AuthGuardReverse]
  },
  {
    path: 'academic', loadChildren: () => import('./modules/academic/academic.module').then(m => m.AcademicModule), canActivate: [AuthGuard]
  },
  {
    path: 'library', loadChildren: () => import('./modules/library/library.module').then(m => m.LibraryModule), canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
