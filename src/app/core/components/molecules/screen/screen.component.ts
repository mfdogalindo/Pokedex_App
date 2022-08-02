import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, share, Subscriber, Subscription, timer } from 'rxjs';
import {
  getPokedexPage,
  initialState,
  PokedexState,
  selectPokedexItems,
  selectPokedexState,
} from 'src/app/core/store/pokedex';

@Component({
  selector: 'mol-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  pokedexState: PokedexState = initialState;

  timerSubscription!: Subscription;
  currentTime = new Date();
  pokedexPageSubscription!: Subscription;

  ngOnInit(): void {
    this.pokedexPageSubscription = this.setPokedexPageSub();
    this.setTimer();
  }

  ngOnDestroy(): void {
    this.pokedexPageSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }

  private setPokedexPageSub(): Subscription {
    return this.store.select(selectPokedexState).subscribe((data) => {
      this.pokedexState = data;
    });
  }

  private setTimer() {
    this.timerSubscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time) => {
        this.currentTime = time;
      });
  }

  public onClickItem(event: any) {
    console.log(event);
  }

  public onClickNext() {
    if (this.pokedexState.next != null) {
      this.store.dispatch(
        getPokedexPage({
          limit: this.pokedexState.limit,
          offset: this.pokedexState.limit + this.pokedexState.offset,
        })
      );
    }
  }

  public onClickPrev() {
    if (this.pokedexState.prev != null) {
      this.store.dispatch(
        getPokedexPage({
          limit: this.pokedexState.limit,
          offset: this.pokedexState.offset - this.pokedexState.limit,
        })
      );
    }
  }
}
