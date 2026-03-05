import {  Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ViewProyectComponent } from "../../Componentes/ViewProyect/ViewProyect";;


@Component({
  selector: 'app-proyectos',
  imports: [MatGridListModule, ViewProyectComponent],
  templateUrl: './Proyectos.html',
})

export class Proyectos {

 }
