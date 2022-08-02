import { Action, createReducer, on } from '@ngrx/store';
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
    data: action,
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
  }))
);

export function reducer(state: PokedexState | undefined, action: Action) {
  return pokedexReducer(state, action);
}
