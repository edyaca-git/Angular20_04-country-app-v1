import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class CountrySearchComponent {

  // Input convierte a la propiedad placeholder en un atributo del componente; este es una señal 
  // de entrada, el padre le puede pasar un valor a esa propiedad
  placeholder = input<string>('Buscar...');

  // Output convierte a la propiedad value en un atributo del componente; este es una señal 
  // de salida, el componente hijo va a emitir un valor al padre
  value = output<string>();
 }
