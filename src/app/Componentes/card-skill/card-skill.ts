import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-skill',
  imports: [],
  templateUrl: './card-skill.html',

})
export class CardSkill {

icon = input.required<string>();
title = input.required<string>();
levelSkill = input.required<string>();
}
