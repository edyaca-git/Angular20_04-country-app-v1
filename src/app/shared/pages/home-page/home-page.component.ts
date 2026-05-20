import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page.component',
  imports: [RouterLink], // para usar el routerLink en el template e ir a la ruta de country
  templateUrl: './home-page.component.html',
})
export class HomePageComponent { }
