import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'at-screen-header',
  templateUrl: './screen-header.component.html',
  styleUrls: ['./screen-header.component.scss'],
})
export class ScreenHeaderComponent implements OnInit, OnDestroy {
  @Input() title : string | undefined = undefined;
  constructor() {}

  currentTime = new Date();
  timerSubscription!: Subscription;

  ngOnInit(): void {
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
}
