import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenListPokemonsComponent } from './screen-list-pokemons.component';

describe('ScreenListPokemonsComponent', () => {
  let component: ScreenListPokemonsComponent;
  let fixture: ComponentFixture<ScreenListPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenListPokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenListPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
