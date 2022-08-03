import { Action, createReducer, on } from '@ngrx/store';
import { Pokemon } from '../../models';
import { TPageCommand } from '../../models/page.command';
import { PokeApiPage } from '../../models/pokeApiPage.model';
import * as PokedexActions from './pokedex.actions';
import { initialState, PokedexState } from './pokedex.state';

const pokedexReducer = createReducer(
  initialState,
  on(PokedexActions.getPokedexPage, (state, action: TPageCommand) => ({
    ...state,
    loading: true,
    offset: action.offset,
    limit: action.limit,
  })),
  on(PokedexActions.getPokedexPageSuccess, (state, action: PokeApiPage) => ({
    ...state,
    loading: false,
    loaded: true,
    total: action.count,
    page: action,
    prev: action.previous,
    next: action.next,
  })),
  on(PokedexActions.getPokedexPageError, (state, err: { error: any }) => ({
    ...state,
    loading: false,
    loaded: false,
    offset: 0,
    limit: 0,
    total: 0,
    error: err.error,
    prev: null,
    next: null,
  })),
  on(PokedexActions.getPokemon, (state, action: { id: number }) => ({
    ...state,
    loading: true
  })),
  on(PokedexActions.getPokemonSuccess, (state, action: Pokemon) => ({
    ...state,
    loading: false,
    loaded: true,
    selectedPokemon: action,
  })),
  on(PokedexActions.getPokemonError, (state, err: { error: any }) => ({
    ...state,
    loading: false,
    loaded: false,
    selectedPokemon: { id: 0 },
    error: err.error,
  })),
  on(PokedexActions.removePokemon, (state) => ({
    ...state,
    selectedPokemon: { id: 0 },
  })),
);

export function reducer(state: PokedexState | undefined, action: Action) {
  return pokedexReducer(state, action);
}
