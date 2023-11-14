import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassComponent } from './class/class.component';

const routes: Routes = [
  {
    path: '', component: AcademicComponent
  },
  {
    path: 'classes', component: ClassesComponent
  },
  {
    path: 'classes/class', component: ClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRoutingModule { }
