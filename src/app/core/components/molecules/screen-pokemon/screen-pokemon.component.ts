import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
    this.indexSprites();
  }

  pokemon: Pokemon = {};

  pokemonSprite: { current: number; index: string[] } = {
    current: 0,
    index: [],
  };

  spriteChangerSub!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.setSpriteChanger();
  }

  ngOnDestroy(): void {
    this.spriteChangerSub.unsubscribe();
  }

  indexSprites() {
    let sprites = this.pokemon.sprites!!
    let index : any[] = Object.entries(sprites).map(([key, value], index) => {
      return value;
    }).filter((value) => typeof(value) === 'string');
    this.pokemonSprite.current = 1;
    this.pokemonSprite.index = index;
  }
  
  setSpriteChanger(){
    this.spriteChangerSub = timer(0, 1000).subscribe(()=>{
      this.changeSprite();
    })
  }

  changeSprite() {
    this.pokemonSprite.current = (this.pokemonSprite.current + 1) % this.pokemonSprite.index.length;
  }
}
