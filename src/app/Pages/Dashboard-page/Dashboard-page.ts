import { Component, type AfterViewInit } from '@angular/core';
import AOS from 'aos';

import { SobreMi } from '../Sobre-Mi/Sobre-Mi';
import { Contacto } from '../contacto/contacto';
import { Habilidades } from '../habilidades/habilidades';
import { Proyectos } from '../Proyectos/Proyectos';

import { Hero } from '../../Componentes/hero/hero';
import { NavBar } from '../../Componentes/nav-bar/nav-bar';

@Component({
  selector: 'app-dashboard-page',
  imports: [NavBar, Hero, SobreMi, Contacto, Habilidades, Proyectos,],
  templateUrl: './Dashboard-page.html',
})

export class DashboardPage  implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }

    blobX = 0;
  blobY = 0;

  targetX = 0;
  targetY = 0;

  blobTransform = '';

  constructor() {
    this.animate();
  }

  onMouseMove(event: MouseEvent) {
    this.targetX = event.clientX;
    this.targetY = event.clientY;
  }

  animate() {
    // suavizado (lerp)
    this.blobX += (this.targetX - this.blobX) * 0.08;
    this.blobY += (this.targetY - this.blobY) * 0.08;

    this.blobTransform = `translate(${this.blobX - 300}px, ${this.blobY - 300}px)`;

    requestAnimationFrame(() => this.animate());
  }
}
