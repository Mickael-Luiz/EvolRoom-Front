import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  {
    path: '', component: AcademicComponent
  },
  {
    path: 'classes', component: ClassesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRoutingModule { }
