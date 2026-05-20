import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.services';
import { of } from 'rxjs';
import { NonFoundComponent } from "../../../shared/components/non-found/non-found.component";
import { CountryInformationComponent } from '../country-page.component/country-information/country-information.component';
 

@Component({
  selector: 'country-page',
  imports: [NonFoundComponent, CountryInformationComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  // Se obtiene el parametro countryCode de la ruta utilizando el ActivatedRoute, 
  // este parametro es el alpha3Code del pais seleccionado
  countryCode = inject(ActivatedRoute).snapshot.paramMap.get('code') as string;
  countryService = inject(CountryService);

  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }) => {
      if (!params.code) return of(undefined);
      return this.countryService.searchCountryByAlphaCode(params.code);
    },
    defaultValue: undefined,  //  Valor inicial mientras carga
  });



}
