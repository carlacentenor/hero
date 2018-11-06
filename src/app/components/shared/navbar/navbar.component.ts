import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Función para redireccionar con button
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    this.router.navigate(['/search',termino])
  }
}