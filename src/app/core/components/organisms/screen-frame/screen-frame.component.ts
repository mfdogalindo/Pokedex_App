import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PokemonListItem } from 'src/app/core/models';
import {
  getPokedexPage,
  getPokemon,
  initialState,
  PokedexState,
  removePokemon,
  selectPokedexState,
} from 'src/app/core/store/pokedex';

@Component({
  selector: 'org-list-frame',
  templateUrl: './screen-frame.component.html',
  styleUrls: ['./screen-frame.component.scss'],
})
export class ListFrameComponent implements OnInit, OnDestroy {
  pokedexState: PokedexState = initialState;
  pokedexPageSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.pokedexPageSubscription = this.setPokedexPageSub();
  }

  ngOnDestroy(): void {
    this.pokedexPageSubscription.unsubscribe();
  }

  private setPokedexPageSub(): Subscription {
    return this.store.select(selectPokedexState).subscribe((data) => {
      this.pokedexState = data;
    });
  }

  onSelectItem(item: PokemonListItem) {
    let idSelected = parseInt(item.url.replace(`https://pokeapi.co/api/v2/pokemon/`, '').replace(`/`, ''));
    this.store.dispatch(getPokemon({ id: idSelected }));
  }

  onNextPage() {
    if (this.pokedexState.next != null) {
      this.store.dispatch(
        getPokedexPage({
          limit: this.pokedexState.limit,
          offset: this.pokedexState.limit + this.pokedexState.offset,
        })
      );
    }
  }

  onPrevPage() {
    if (this.pokedexState.prev != null) {
      this.store.dispatch(
        getPokedexPage({
          limit: this.pokedexState.limit,
          offset: this.pokedexState.offset - this.pokedexState.limit,
        })
      );
    }
  }

  backToList(){
    this.store.dispatch(removePokemon());
  }
}
