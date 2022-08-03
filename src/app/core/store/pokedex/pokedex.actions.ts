import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../../models';
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

export const getPokemon = createAction(
  '[Pokedex] Get Pokemon',
  props<{ id: number }>()
);

export const removePokemon = createAction('[Pokedex] Remove Pokemon');

export const getPokemonSuccess = createAction(
  '[Pokedex] Get Pokemon Success',
  props<Pokemon>()
);

export const getPokemonError = createAction(
  '[Pokedex] Get Pokemon Error',
  props<{ error: string }>()
);
