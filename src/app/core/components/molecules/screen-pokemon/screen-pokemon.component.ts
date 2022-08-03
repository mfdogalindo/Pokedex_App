import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Pokemon } from 'src/app/core/models';

@Component({
  selector: 'mol-screen-pokemon',
  templateUrl: './screen-pokemon.component.html',
  styleUrls: ['./screen-pokemon.component.scss'],
})
export class ScreenPokemonComponent implements OnInit, OnDestroy {
  @Output() onClickBack = new EventEmitter<void>();
  @Input('pokemon')
  public set pokemonSet(val: Pokemon) {
    this.pokemon = val;
    this.indexData();
  }

  pokemon: Pokemon = {};

  pokemonSprite: { current: number; index: string[] } = {
    current: 0,
    index: [],
  };
  pokemonAbilities: string[] = [];
  pokemonTypes: string[] = [];
  pokemonMoves: string[] = [];

  spriteChangerSub!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.setSpriteChanger();
  }

  ngOnDestroy(): void {
    this.spriteChangerSub.unsubscribe();
  }

  indexData() {
    // Set sprites
    let sprites = this.pokemon.sprites!!;
    let index: any[] = Object.entries(sprites)
      .map(([key, value], index) => {
        return value;
      })
      .filter((value) => typeof value === 'string');
    this.pokemonSprite.current = 1;
    this.pokemonSprite.index = index;

    // Set abilities
    this.pokemonAbilities = this.pokemonAbilities =
      this.pokemon.abilities!!.map((ability) => {
        return ability.ability.name;
      });

    // Set types
    this.pokemonTypes = this.pokemon.types!!.map((type) => {
      return type.type.name;
    });

    // Set moves
    this.pokemonMoves = this.pokemon.moves!!.map((move) => {
      return move.move.name;
    });
  }

  setSpriteChanger() {
    this.spriteChangerSub = timer(0, 1000).subscribe(() => {
      this.changeSprite();
    });
  }

  changeSprite() {
    this.pokemonSprite.current =
      (this.pokemonSprite.current + 1) % this.pokemonSprite.index.length;
  }
}
