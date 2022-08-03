import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPokemonComponent } from './screen-pokemon.component';

describe('ScreenPokemonComponent', () => {
  let component: ScreenPokemonComponent;
  let fixture: ComponentFixture<ScreenPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
