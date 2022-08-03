import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from './core.state';
import * as PokedexReducer from './pokedex/pokedex.reducer';

export const reducers : ActionReducerMap<State> = {
   pokedex: PokedexReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];