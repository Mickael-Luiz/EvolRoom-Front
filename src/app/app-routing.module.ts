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
    path: 'edugames', loadChildren: () => import('./modules/edugames/edugames.module').then(m => m.EdugamesModule), canActivate: [AuthGuard]
  },
  {
    path: 'financial', loadChildren: () => import('./modules/financial/financial.module').then(m => m.FinancialModule), canActivate: [AuthGuard]
  },
  {
    path: 'library', loadChildren: () => import('./modules/library/library.module').then(m => m.LibraryModule), canActivate: [AuthGuard]
  },
  {
    path: 'notice', loadChildren: () => import('./modules/notice/notice.module').then(m => m.NoticeModule), canActivate: [AuthGuard]
  },
  {
    path: 'preferences', loadChildren: () => import('./modules/preferences/preferences.module').then(m => m.PreferencesModule), canActivate: [AuthGuard]
  },
  {
    path: 'support', loadChildren: () => import('./modules/support/support.module').then(m => m.SupportModule), canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
