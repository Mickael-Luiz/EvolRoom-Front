import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/shared/core.module';

import { AcademicRoutingModule } from './academic-routing.module';
import { AcademicComponent } from './academic/academic.component';
import { ClassesComponent } from './classes/classes.component';


@NgModule({
  declarations: [
    AcademicComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AcademicRoutingModule
  ]
})
export class AcademicModule { }
