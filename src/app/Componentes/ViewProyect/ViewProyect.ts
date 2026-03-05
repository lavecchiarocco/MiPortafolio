import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';



@Component({
  selector: 'app-view-proyect',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './ViewProyect.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ViewProyectComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() url!: string;

  openProject() {
    window.open(this.url, '_blank');
  }
}


