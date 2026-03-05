import { Component, input } from '@angular/core';

export interface CardSkill {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-card-skill',
  standalone: true,
  templateUrl: './card-skill.html',
})
export class CardSkillComponent {
  title = input.required<string>();
  icon = input.required<string>();

  onImgError(e: Event) {
    (e.target as HTMLImageElement).src = 'assets/icons/default-skill.svg';
  }
}
