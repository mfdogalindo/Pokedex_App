import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TPage } from '../../models/page.model';
import { ApiService } from '../../services/api.service';
import * as PokedexActions from './pokedex.actions';

@Injectable()
export class PokedexEffects {
  constructor(private action$: Actions, private apiService: ApiService) {}

  fetchPokedex$ = createEffect(() =>
    this.action$.pipe(
      ofType(PokedexActions.getPokedexPage.type),
      switchMap((action) =>
        this.apiService.getPage(action).pipe(
          map((response) => PokedexActions.getPokedexPageSuccess(response)),
          catchError((error) =>
            of(PokedexActions.getPokedexPageError({ error }))
          )
        )
      )
    )
  );
}
