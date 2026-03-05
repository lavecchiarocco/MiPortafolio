import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSkillComponent, CardSkill } from '../../Componentes/card-skill/card-skill';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule, CardSkillComponent],
  templateUrl: './habilidades.html',
})
export class Habilidades {
  skills: CardSkill[] = [
    { title: 'Angular', icon: '/icons/angular.png' },
    { title: 'HTML', icon: '/icons/html.png' },
    { title: 'CSS', icon: '/icons/css.png' },
    { title: 'SQL', icon: '/icons/sql.png' },
    { title: 'C#', icon: '/icons/csharp.svg' },
    { title: 'JavaScript', icon: '/icons/js.svg' },
    { title: 'React', icon: '/icons/react.svg' },
    { title: 'Git', icon: '/icons/git-original.svg' },
    { title: 'TypeScript', icon: '/icons/ts.svg' },
    { title: '.NET', icon: '/icons/dotnetcore-original.svg' },
    { title: 'Tailwind', icon: '/icons/tailwindcss.svg' },
    { title: 'Python', icon: '/icons/python.svg' },
    { title: 'Pandas', icon: '/icons/pandas.svg' },
    { title: 'Power BI', icon: '/icons/powerbi.svg' },
  ];

  trackByTitle(_: number, s: CardSkill) {
    return s.title;
  }
}
