import { Pokemon } from '../../models';
import {
  PokeApiPage,
  PokeApiPageInitialValue,
} from '../../models/pokeApiPage.model';

export interface PokedexState {
  page: PokeApiPage;
  selectedPokemon: Pokemon;
  loading: boolean;
  loaded: boolean;
  error: any;
  offset: number;
  limit: number;
  total: number;
  prev: string | null;
  next: string | null;
}

export const initialState: PokedexState = {
  page: PokeApiPageInitialValue,
  selectedPokemon: { id: 0 },
  loading: false,
  loaded: false,
  error: null,
  offset: 0,
  limit: 0,
  total: 0,
  prev: null,
  next: null,
};
