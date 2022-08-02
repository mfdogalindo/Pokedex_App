import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './templates/pokedex/pokedex.component';
import { LoginComponent } from './templates/login/login.component';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './core/services/api.service';

@NgModule({
  declarations: [AppComponent, PokedexComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
