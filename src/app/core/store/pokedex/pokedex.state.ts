import { TPage } from "../../models/page.model";

export interface PokedexState {
   data: TPage;
   loading: boolean;
   loaded: boolean;
   error: any;
 }
 
 export const initialState: PokedexState = {
   data: { count: 0, next: null, previous: null, results: [] },
   loading: false,
   loaded: false,
   error: null,
 };