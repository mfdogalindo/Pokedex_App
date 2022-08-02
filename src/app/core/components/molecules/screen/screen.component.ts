import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, share, Subscription, timer } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { getPokedexPage } from 'src/app/core/store/pokedex';
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

  renderData: any = [] 

  timerSubscription!: Subscription;
  currentTime = new Date();
  currentPage: { size: number; offset: number; total: number } = {
    size: 10,
    offset: 0,
    total: 0,
  };

  ngOnInit(): void {
    this.store.dispatch(getPokedexPage({ limit: 10, offset: 0 }));
    //this.refreshPage(this.currentPage.size, this.currentPage.offset);
    this.setTimer();
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
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

  async refreshPage(limit: number, offset: number) {
    //this.data = await this.apiService.getPage({ limit, offset });
    this.currentPage.total = this.data.count;
    this.renderData = this.data.results;
    console.log(this.data);
  }

  public onClickItem(event: any) {
    console.log(event);
  }
}
