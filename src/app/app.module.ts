import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './templates/pokedex/pokedex.component';
import { LoginComponent } from './templates/login/login.component';
import { SharedModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, PokedexComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
