import { Component, computed, inject, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountrySearchComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.services';
import { of } from 'rxjs';


@Component({
  selector: 'by-country.page',
  imports: [CountrySearchComponent, CountryListComponent],
  templateUrl: './by-country.page.component.html',
})

export class ByCountryPageComponent {

  countryService = inject(CountryService);

  query = signal('');

  // rxResource es una versión de resource que trabaja con observables, en lugar de promises, y se 
  // encarga de manejar el estado de carga y error de la petición, y de actualizar
  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {      
      if (!params.query) return of([]);  //  rxResource necesita Observable, por eso se utiliza [of] para devolver un observable con un array vacío cuando no hay query.

      return this.countryService.searchByCountry(params.query);
    },
    defaultValue: [],  //  Valor inicial mientras carga
  });


}
