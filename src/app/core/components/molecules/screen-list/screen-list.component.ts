import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { PokemonListItem } from 'src/app/core/models';
import { initialState, PokedexState } from 'src/app/core/store/pokedex';

@Component({
  selector: 'mol-screen-list',
  templateUrl: './screen-list.component.html',
  styleUrls: ['./screen-list.component.scss'],
})
export class ScreenComponent implements OnInit {
  @Output() onClickItem = new EventEmitter<PokemonListItem>();
  @Output() onClickNextPage = new EventEmitter<void>();
  @Output() onClickPrevPage = new EventEmitter<void>();
  @Input() pokedexState: PokedexState = initialState;

  constructor() {}

  ngOnInit(): void {}
}
