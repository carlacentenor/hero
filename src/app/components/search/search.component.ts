import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  heroes: any[] = [];
  termino:string;
  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService:HeroesService,
     private router: Router) { 
      
  }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params => {
    this.heroes = this._heroesService.buscarHeroes(params['termino'])
    this.termino = params['termino'];
     
    });

  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx])
  }

}
