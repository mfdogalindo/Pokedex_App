import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonListItem } from 'src/app/core/models';

@Component({
  selector: 'at-screen-list-pokemons',
  templateUrl: './screen-list-pokemons.component.html',
  styleUrls: ['./screen-list-pokemons.component.scss'],
})
export class ScreenListPokemonsComponent implements OnInit {
  @Input() pokemons: PokemonListItem[] = [];
  @Output() onClickItem = new EventEmitter<PokemonListItem>();

  constructor() {}

  ngOnInit(): void {}
}
