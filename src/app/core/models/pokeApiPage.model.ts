export type PokeApiPage = {
   count: number;
   next: string | null;
   previous: string | null;
   results: [{ name: string; url: string }];
}

export const PokeApiPageInitialValue: PokeApiPage = {
   count: 0,
   next: null,
   previous: null,
   results: [{ name: '', url: '' }],
 };