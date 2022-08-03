import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PokedexState} from './pokedex.state'

export const selectPokedex = createFeatureSelector<PokedexState>('pokedex');

export const selectPokedexItems = createSelector(
   selectPokedex,
   (state: PokedexState) => state.page
)

export const selectPokedexState = createSelector(
   selectPokedex,
   (state: PokedexState) => state
)

export const selectedPokemon = createSelector(
   selectPokedex,
   (state: PokedexState) => state.selectedPokemon
)