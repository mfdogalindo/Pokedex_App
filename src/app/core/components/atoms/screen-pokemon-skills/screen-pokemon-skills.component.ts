import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mol-screen-pokemon-skills',
  templateUrl: './screen-pokemon-skills.component.html',
  styleUrls: ['./screen-pokemon-skills.component.scss'],
})
export class ScreenPokemonSkillsComponent implements OnInit {
  @Input() columns: string = "1";
  @Input() label = 'Skill';
  @Input() skills: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
