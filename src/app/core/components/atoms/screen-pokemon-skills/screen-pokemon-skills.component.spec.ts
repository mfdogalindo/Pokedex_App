import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPokemonSkillsComponent } from './screen-pokemon-skills.component';

describe('ScreenPokemonSkillsComponent', () => {
  let component: ScreenPokemonSkillsComponent;
  let fixture: ComponentFixture<ScreenPokemonSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenPokemonSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenPokemonSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
