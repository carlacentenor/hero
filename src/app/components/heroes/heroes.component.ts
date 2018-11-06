import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service'
import { Router } from '@angular/router';  // Función para redireccionar con button
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,
    private router: Router) { // Función para redireccionar con button

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes)

  }

  // Función para redireccionar con button
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx])
  }

}
