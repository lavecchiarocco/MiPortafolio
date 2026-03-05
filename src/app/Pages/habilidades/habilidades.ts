import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardSkill } from '../../Componentes/card-skill/card-skill';

@Component({
  selector: 'app-habilidades',
  imports: [CardSkill],
  templateUrl: './habilidades.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Habilidades { }
