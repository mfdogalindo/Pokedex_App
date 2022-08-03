import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ScreenComponent } from './components/molecules/screen-list/screen-list.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { ListFrameComponent } from './components/organisms/screen-frame/screen-frame.component';
import { ApiService } from './services/api.service';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './store/core.reducers';
import { PokedexEffects } from './store/pokedex/pokedex.effects';
import { environment } from 'src/environments/environment';
import { ScreenBtnComponent } from './components/atoms/screen-btn/screen-btn.component';
import { ScreenHeaderComponent } from './components/atoms/screen-header/screen-header.component';
import { ScreenListPokemonsComponent } from './components/atoms/screen-list-pokemons/screen-list-pokemons.component';
import { ScreenPokemonComponent } from './components/molecules/screen-pokemon/screen-pokemon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production,
    }),
    EffectsModule.forRoot([PokedexEffects]),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListFrameComponent,
    ScreenComponent,
    ScreenBtnComponent,
    ScreenHeaderComponent,
    ScreenListPokemonsComponent,
    ScreenPokemonComponent,
  ],
  exports: [HeaderComponent, FooterComponent, ListFrameComponent],
  providers: [ApiService],
})
export class SharedModule {}
