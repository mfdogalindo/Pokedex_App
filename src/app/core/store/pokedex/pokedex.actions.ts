import { createAction, props } from '@ngrx/store';
import { TPageCommand } from '../../models/page.command';
import { PokeApiPage } from '../../models/pokeApiPage.model';

export const getPokedexPage = createAction(
  '[Pokedex] Get Pokedex Page',
  props<TPageCommand>()
);

export const getPokedexPageSuccess = createAction(
  '[Pokedex] Get Pokedex Page Success',
  props<PokeApiPage>()
);

export const getPokedexPageError = createAction(
  '[Pokedex] Get Pokedex Page Error',
  props<{ error: string }>()
);
