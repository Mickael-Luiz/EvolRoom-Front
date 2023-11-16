import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardCursoComponent } from '../components/card-curso/card-curso.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { TableModule } from 'primeng/table';
import { TableComponent } from '../components/table/table.component';

@NgModule({
  declarations: [
    CardCursoComponent,
    BreadcrumbComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    MultiSelectModule,
    TableModule
  ],
  exports: [
    ButtonModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    MultiSelectModule,
    CardCursoComponent,
    BreadcrumbComponent,
    TableComponent,
    TableModule
  ]
})
export class CoreModule { }
