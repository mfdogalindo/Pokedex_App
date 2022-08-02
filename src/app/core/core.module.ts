import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ScreenComponent } from './components/molecules/screen/screen.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { ListFrameComponent } from './components/organisms/list-frame/list-frame.component';
import { ApiService } from './services/api.service';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './store/core.reducers';
import { PokedexEffects } from './store/pokedex/pokedex.effects';
import { environment } from 'src/environments/environment';

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
  ],
  exports: [HeaderComponent, FooterComponent, ListFrameComponent],
  providers: [ApiService],
})
export class SharedModule {}
