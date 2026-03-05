import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './Sobre-Mi.html',
})
export class SobreMi implements AfterViewInit {
name = 'Rocco Lavecchia';
role = 'Estudiante de Tecnicatura en Programacion';


  ngAfterViewInit(): void {
    new Typed('#typed-description', {
      strings: [
        `Estudiante avanzado de la Tecnicatura Universitaria en Programación (UTN).Experiencia en proyectos web con React, JavaScript, HTML, CSS y APIs, así como aplicaciones de escritorio
         con C# .NET (Windows Forms) y SQL Server. Busco mi primera experiencia laboral en programación para aportar
valor desde el inicio y continuar desarrollándome profesionalmente..`
      ],
      typeSpeed: 25,
      backSpeed: 0,
      loop: false,
      showCursor: false,
      cursorChar: '|',
    });
  }
}
