import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EvolGamesModule } from './modules/evol-games/evol-games.module';
import { CoreModule } from './shared/core.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    EvolGamesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
