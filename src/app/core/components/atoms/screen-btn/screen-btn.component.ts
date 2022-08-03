import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'at-screen-btn',
  templateUrl: './screen-btn.component.html',
  styleUrls: ['./screen-btn.component.scss']
})
export class ScreenBtnComponent implements OnInit {
  @Input() disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
