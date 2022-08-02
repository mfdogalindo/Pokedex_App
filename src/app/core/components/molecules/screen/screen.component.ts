import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, share, Subscriber, Subscription, timer } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { getPokedexPage, selectPokedexItems } from 'src/app/core/store/pokedex';
import { TPage } from '../../../models/page.model';

@Component({
  selector: 'mol-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  data: TPage = {
    count: 0,
    next: null,
    previous: null,
    results: [{ name: '', url: '' }],
  };

  renderData: any = [];

  timerSubscription!: Subscription;
  currentTime = new Date();
  currentPage: { size: number; offset: number; total: number } = {
    size: 10,
    offset: 0,
    total: 0,
  };
  pokedexPageSubscription!: Subscription;

  ngOnInit(): void {
    this.pokedexPageSubscription = this.setPokedexPageSub();
    this.getPokedexPage(this.currentPage.size, this.currentPage.offset);
    this.setTimer();
  }

  ngOnDestroy(): void {
    this.pokedexPageSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }

  private setPokedexPageSub(): Subscription {
    return this.store.select(selectPokedexItems).subscribe((data) => {
      this.data = data;
      this.renderData = this.data.results;
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

  async getPokedexPage(limit: number, offset: number) {
    this.store.dispatch(getPokedexPage({ limit, offset }));
  }

  public onClickItem(event: any) {
    console.log(event);
  }
}
