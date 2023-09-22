import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaHomeComponent } from './biblioteca-home/biblioteca-home.component';



@NgModule({
  declarations: [
    BibliotecaHomeComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
