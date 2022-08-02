import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PokeApiPage, PokeApiPageInitialValue } from 'src/app/core/models/pokeApiPage.model';
import { getPokedexPage, selectPokedexItems } from 'src/app/core/store/pokedex';

@Component({
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit, OnDestroy {
  page: PokeApiPage = PokeApiPageInitialValue;

  constructor(private store: Store) {}

  currentPage: { size: number; offset: number; total: number } = {
    size: 10,
    offset: 0,
    total: 0,
  };
  pokedexPageSubscription!: Subscription;

  ngOnInit(): void {
    this.getPokedexPage(this.currentPage.size, this.currentPage.offset);
    this.pokedexPageSubscription = this.setPokedexPageSub();
  }

  ngOnDestroy(): void {
    this.pokedexPageSubscription.unsubscribe();
  }

  async getPokedexPage(limit: number, offset: number) {
    this.store.dispatch(getPokedexPage({ limit, offset }));
  }

  private setPokedexPageSub(): Subscription {
    return this.store.select(selectPokedexItems).subscribe((data) => {
      this.page = data;
    });
  }
}
