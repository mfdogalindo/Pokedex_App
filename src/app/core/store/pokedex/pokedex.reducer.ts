import { act } from '@ngrx/effects';
import { Action, createReducer, on } from '@ngrx/store';
import { TPage } from '../../models/page.model';
import * as PokedexActions from './pokedex.actions';
import { initialState, PokedexState } from './pokedex.state';

const pokedexReducer = createReducer(
  initialState,
  on(PokedexActions.getPokedexPage, (state) => ({ ...state, loading: true })),
  on(PokedexActions.getPokedexPageSuccess, (state, action: TPage) => ({
    ...state,
    loading: false,
    loaded: true,
    data: action,
  })),
  on(PokedexActions.getPokedexPageError, (state, err: { error: any }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: err.error,
  }))
);

export function reducer(state: PokedexState | undefined, action: Action) {
  return pokedexReducer(state, action);
}
