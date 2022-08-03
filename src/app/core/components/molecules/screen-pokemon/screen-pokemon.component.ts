import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/core/models';

@Component({
  selector: 'mol-screen-pokemon',
  templateUrl: './screen-pokemon.component.html',
  styleUrls: ['./screen-pokemon.component.scss'],
})
export class ScreenPokemonComponent implements OnInit {
  @Input() pokemon: Pokemon = {};
  @Output() onClickBack = new EventEmitter<void>();
  
  constructor() {}

  ngOnInit(): void {}
}
